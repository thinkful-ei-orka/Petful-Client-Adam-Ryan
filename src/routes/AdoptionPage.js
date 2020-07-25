import React from "react";
import Pet from "../components/Pet";
import AdoptionQueue from "../components/AdoptionQueue.js";
import AddToList from "../components/AddToList";
import ApiService from "../services/ApiService";
import config from "../config";


export default class AdoptionPage extends React.Component {
  constructor(props) {
    super(props);
    this.handlePetAdopted = this.handlePetAdopted.bind(this);
  }
  componentDidMount() {
    this.props.getState();
  };

  async handlePetAdopted(type) {
    await ApiService.handlePetAdopted(type).catch((error) => console.error(error));
    await ApiService.handleRemoveUser().catch((error) => console.error(error));
    this.props.getState();
  };

  demoFunction = () => {
    if (this.props.people[0] !== this.props.user) {
      let type = ["cats", "dogs"][Math.floor(Math.random() * 2)];
      this.handlePetAdopted(type);
      setTimeout(() => this.demoFunction(), 5000);
    }
  };

  addToQueue = (name) => {
    const newUser = {
      name: name,
    };
    const userString = JSON.stringify(newUser);
    fetch(`${config.API_ENDPOINT}people`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: userString,
    })
      .then(() => this.props.getState())
      .catch((error) => {
        console.error({ error });
      });
    // this.props.getState();
  };

  render() {
    return (
      <div className="AdoptionPage">
        <header>
          <h1>Here are some available fluffballs!</h1>
        </header>
        <section>
          <section className="AdoptionQueue">
            <AdoptionQueue people={this.props.people} />
            {this.props.people === undefined || this.props.user !==
              this.props.people[this.props.people.length - 1] ? (
                <AddToList
                  user={this.props.user}
                  userChange={this.props.userChange}
                  addToQueue={this.addToQueue}
                  people={this.props.people}
                  demoFunction={this.demoFunction}
                />
              ) : null}
          </section>
          {this.props.pets === undefined ?
            <section className='AdoptionPageAdopted'>
              <p>
                All our pets are adopted!
              </p>
            </section>
            : <section className="AdoptionPagePrimary">

              <Pet
                pet={this.props.pets.cat}
                user={this.props.user}
                people={this.props.people}
                type="cats"
                handlePetAdopted={this.handlePetAdopted}
              />
              <Pet
                pet={this.props.pets.dog}
                user={this.props.user}
                people={this.props.people}
                type="dogs"
                handlePetAdopted={this.handlePetAdopted}
              />
            </section>}
        </section>
      </div>
    );
  }
}
