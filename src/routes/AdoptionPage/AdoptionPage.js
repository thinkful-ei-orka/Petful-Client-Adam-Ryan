import React from "react";
import Pet from "../../components/Pet";
import AdoptionQueue from "../../components/AdoptionQueue.js";
import AddToList from "../../components/AddToList";
import ApiService from "../../services/ApiService";
import "./AdoptionPage.css";

export default class AdoptionPage extends React.Component {
  constructor(props) {
    super(props);
    this.handlePetAdopted = this.handlePetAdopted.bind(this);
    this.state = {
      adopted: false,
      adoptedPet: {},
    };
  }
  componentDidMount() {
    this.props.getState();
  }

  async handlePetAdopted(type, user = false) {
    const adoptedPet = await ApiService.handlePetAdopted(type).catch((error) =>
      console.error(error)
    );
    await ApiService.handleRemoveUser().catch((error) => console.error(error));
    this.props.getState();
    if (user) {
      this.setState({ adoptedPet: adoptedPet, adopted: true });
      setTimeout(
        () => this.setState({ adoptedPet: {}, adopted: false }),
        10000
      );
    }
  }

  demoExtension(count = 0) {
    const people = [
      "Aaron A Aaronson",
      "Betty Buckingham",
      "Charlie Cook",
      "Delila Dirk",
      "Erin Engleburt",
    ];
    if (count < 5) {
      setTimeout(async () => {
        await this.addToQueue(people[count]);
        await this.demoExtension((count += 1));
      }, 5000);
    }
  }

  demoFunction = () => {
    if (
      this.props.people[0] !== this.props.user &&
      this.props.people.length > 0 &&
      this.props.user !== ""
    ) {
      let type = ["cats", "dogs"][Math.floor(Math.random() * 2)];
      this.handlePetAdopted(type);
      setTimeout(() => this.demoFunction(), 5000);
    } else {
      this.demoExtension();
    }
  };

  addToQueue = (name) => {
    const newUser = {
      name: name,
    };
    const userString = JSON.stringify(newUser);
    fetch(`https://floating-wildwood-68556.herokuapp.com//people`, {
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
  };

  render() {
    return (
      <div className="AdoptionPage">
        <header>
          <h1>Here are some available fluffballs!</h1>
        </header>
        <main className="Adoption">
          <section className="AdoptionQueue">
            <AdoptionQueue people={this.props.people} />
            {(this.props.people === undefined ||
              this.props.user !==
                this.props.people[this.props.people.length - 1]) &&
            this.props.user !== this.props.people[0] ? (
              <AddToList
                user={this.props.user}
                userChange={this.props.userChange}
                addToQueue={this.addToQueue}
                people={this.props.people}
                demoFunction={this.demoFunction}
              />
            ) : null}
          </section>
          {this.state.adopted ? (
            <section className="AdoptionPageAdopted">
              <h2>Congratulations on your new pet!</h2>
              <Pet
                pet={this.state.adoptedPet}
                user={this.props.user}
                people={this.props.people}
              />
            </section>
          ) : (
            <section className="AdoptionPagePrimary">
              <Pet
                pet={this.props.pets.cat}
                user={this.props.user}
                people={this.props.people}
                type="cats"
                handlePetAdopted={this.handlePetAdopted}
                userChange={this.props.userChange}
              />
              <Pet
                pet={this.props.pets.dog}
                user={this.props.user}
                people={this.props.people}
                type="dogs"
                handlePetAdopted={this.handlePetAdopted}
                userChange={this.props.userChange}
              />
            </section>
          )}
        </main>
      </div>
    );
  }
}
