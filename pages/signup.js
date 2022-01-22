// concept of both signup and contact us isquite similar.
// That is to push the data and store it in the backend..
// let's make the UI for sign up quickly.
//  so until now we copied the ui of the contact us page and made a button
// now we will work a little on the sign up and make a new component to store subcollection data.


// we managed to remove the unnecessary details, lets creaate proper connection
// when ever a user logs in his details have to be stored in his own collectio/documents, and not on others.
// details.name issame as of the document details/id
// now since we are storing the detaisl of the user, lets works a little on subcollection part


// we created the subcomponent
// we are mostly done with the UI, now all we have to do is create sub collection, let,s visit the documentatobn as always

// one last thing, then lets check the feature.
// we will conditionally render the subcollection component
// we are done , lets check the feature

import React from "react";
import SignUp from "../components/SignUp";

function signUp() {
  return (
    <div>
      <SignUp />
    </div>
  );
}

export default signUp;
