import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css";
import { faker } from '@faker-js/faker';
import ComponentDetails from "./componentDetail.js"; // Assuming component details are in a separate file
import ApprovalCard from './ApprovalCard.js';

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard> 
       <ComponentDetails 
          author ="Emeka P" 
          timeOfPost="Today at 6:43pm" 
          comment ="well said" 
          avata = {faker.image.sports()} />  
    </ApprovalCard>

   <ApprovalCard>
       <ComponentDetails 
          author ="Alex" 
          timeOfPost="yesterday at 2:43pm" 
          comment ="Nice blog post" 
          avata = {faker.image.image()} /> 
   </ApprovalCard>

    <ApprovalCard>
        <ComponentDetails 
          author ="Eliza" 
          timeOfPost="Today at 3: am" 
          comment ="praise God, Nice content" 
          avata = {faker.image.city()} />
    </ApprovalCard>

    <ApprovalCard>
        <ComponentDetails 
          author ="OmoBola" 
          timeOfPost="Today at 3: am" 
          comment ="Trump or Tinubu, both na T" 
          avata = {faker.image.people()} />
    </ApprovalCard>

    <ApprovalCard>
        <ComponentDetails 
          author ="Buse" 
          timeOfPost="Today at 3: am" 
          comment ="No long things, as e dey hot" 
          avata = {faker.image.transport()} />
    </ApprovalCard>

    <ApprovalCard>
        <ComponentDetails 
          author ="Gaius" 
          timeOfPost="Today at 3: am" 
          comment ="Yikes, no Evidence" 
          avata = {faker.image.business()} />
    </ApprovalCard>
    
    <ApprovalCard>
        <ComponentDetails 
          author ="Azariah" 
          timeOfPost="Today at 3: am" 
          comment ="Na so, i feel you, i feel good" 
          avata = {faker.image.animals()} />
    </ApprovalCard>
    

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));   