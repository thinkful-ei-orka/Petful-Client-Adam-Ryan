/*
* An image of the Ctrl F2;
* A physical description of the Ctrl F2;
* The Ctrl F2's name, gender, age, and breed.
* A story of the Ctrl F2's journey to the shelter
When I visit the adoption page, I can only see the Ctrl F2 that is next in line to be adopted.

I can see a list of other people currently in line.
* I can submit my name and be added to the end of the line.
* When I am not at the beginning of the line, I cannot see an option to adopt a Ctrl F2.
* For demo purposes: Once I join the line, I can see other Ctrl F2s being adopted until I am at the front of the line.
    * Every five seconds, the user at the front of the line should be removed from the line and one of the Ctrl F2s up for adoption should disappear.
    * When I am at the front of the line, a new user should be added to the line behind me every five seconds until there are a total of five users in line.

-------------

* When I am at the front of the line:

* I can see an option to adopt a Ctrl F2.
* When I choose to adopt a Ctrl F2: 
    * I see a confirmation that I have adopted the Ctrl F2.
    * I see my name removed from the line.
    * I see the Ctrl F2 I adopted is removed from view and replaced with another Ctrl F2.
*/

//title
//Ctrl F2 module - button only shows if current user is next

//--side(left?)
//ticker (people) - starts upon name entering (currentPerson!==null) decreases by 1 every 5 seconds (a random Ctrl F2 will be adopted)
//      (own module) - insert name section to be added to list - disappear upon submission

// if people[0]===currentPerson = time ticker stops AND Adopt button appears
// if currentPerson exists = enter name box disappears

import React from "react";
import Pet from "../components/Pet";
import AdoptionQueue from "../components/AdoptionQueue.js";
import AddToList from "../components/AddToList";
// import { Link } from 'react-router-dom';
// import config from "../config";
// import Users from "../../components/Users/Users";
import ApiService from "../services/ApiService";
import config from "../config";
//   componentDidMount() {
//     Promise.all([
//       fetch(`${config.API_ENDPOINT}/dogs`),
//       fetch(`${config.API_ENDPOINT}/cats`),
//       fetch(`${config.API_ENDPOINT}/users`),
//     ])
//       .then(([dogsRes, catsRes, usersRes]) => {
//         if (!dogsRes.ok) return dogsRes.json().then((e) => Promise.reject(e));
//         if (!catsRes.ok) return catsRes.json().then((e) => Promise.reject(e));
//         if (!usersRes.ok) return usersRes.json().then((e) => Promise.reject(e));

//         return Promise.all([dogsRes.json(), catsRes.json(), usersRes.json()]);
//       })
//       .then(([dogs, cats, users]) => {
//         this.setState({
//           dogs,
//           cats,
//           users,
//           currentDog: dogs.first,
//           currentCat: cats.first,
//         });
//       });
//   }

export default class AdoptionPage extends React.Component {
  componentDidMount() {
    this.props.getState();
  }
  handlePetAdopted = (type) => {
    ApiService.handlePetAdopted(type).catch((error) => console.error(error));
    ApiService.handleRemoveUser().then(() => {
      this.props.getState().catch((error) => console.error(error));
    });
  };
  handleAddUser = (input) => {
    ApiService.handleAddUser(input).catch((error) => console.error(error));
  };
  addToQueue = (name) => {
    const newUser = {
      name: name,
    };
    const userString = JSON.stringify(newUser);
    fetch(`${config.API_ENDPOINT}/people`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: userString,
    })
      .then(this.props.getState())
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
        <section>
          <section className="AdoptionQueue">
            <AdoptionQueue people={this.props.people} />
            {this.props.user !==
            this.props.people[this.props.people.length - 1] ? (
              <AddToList
                user={this.props.user}
                userChange={this.props.userChange}
                addToQueue={this.addToQueue}
              />
            ) : null}
          </section>
          <section className="AdoptionPagePrimary">
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
          </section>
        </section>
      </div>
    );
  }
}
