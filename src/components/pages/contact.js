import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (

      <div className="container-fluid">
        <h1>Contact</h1>
          <div className="row">
            <div className="col">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a purus mauris. Integer sollicitudin in lectus at accumsan. Pellentesque porta lectus accumsan, vestibulum lacus in, efficitur ex. Fusce faucibus lectus vitae suscipit tincidunt. Etiam ut faucibus ante. Sed vitae cursus eros, in hendrerit elit. Fusce elementum sit amet ligula vitae aliquet. Pellentesque lacus lectus, facilisis vel sollicitudin ut, rhoncus non libero. Cras vel turpis bibendum, molestie felis eget, porta magna.
            </p>
            </div>
            </div>

          <div className="row col-md-auto">
            <form>
              <div className="form-group">
                <label >Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label >Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" />
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

    );
  }
}

export default Contact;
