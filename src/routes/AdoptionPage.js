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
// import { Link } from 'react-router-dom';
import config from "../../config";
import Cats from "../../components/Cats/Cats";
import Dogs from "../../components/Dogs/Dogs";
import Users from "../../components/Users/Users";
import ApiService from "../../service/ApiService";

export default class AdoptionPage extends React.Component {
  state = {
    dogs: null,
    cats: null,
    users: null,
    currentDog: null,
    currentCat: null,
    name: null,
  };

  handleDogAdopted = () => {
    ApiService.handleDogAdopted()
      .then((dogs) => {
        this.setState({ dogs, currentDog: dogs.first });
      })
      .then((res) =>
        ApiService.handleUserDelete().then((users) => {
          this.setState({ users });
          //   this.props.history.push("/");
        })
      )
      .catch((error) => console.error(error));
  };

  handleCatAdopted = () => {
    ApiService.handleCatAdopted()
      .then((cats) => {
        this.setState({ cats, currentCat: cats.first });
      })
      .then((res) =>
        ApiService.handleUserDelete().then((users) => {
          this.setState({ users });
          //   this.props.history.push("/");
        })
      )
      .catch((error) => console.error(error));
  };

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

  render() {
    return (
      <div className="AdoptionPage">
        <header>
          <h1>Here are some available fluffballs!</h1>
        </header>
        <section className="AdoptionPagePrimary">
          <Pet pet={props.pets.cat} user={props.user} people={props.people} />
          <Pet pet={props.pets.dog} user={props.user} people={props.people} />
        </section>
      </div>
    );
  }
}
