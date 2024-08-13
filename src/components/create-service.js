import React from "react";
import './prof.css';

const CreateService = ()=>{
        return(
            <div className="crtSvc-container">
        <div className="create-service">
          <h2>Create A Service </h2>
          <div>
            <div className="cover-photo-service">
                <p>+ Add Service Pic</p>
                
            </div>
            <div>
                <h3>Service Category</h3>
            <select>
                <option>Maid </option>
                <option>lecturer </option>
                <option>Electrician </option>
                <option>Engineer </option>
                <option>Home Keeper </option>
                <option>Gardener </option>
            </select>
            </div>
                <div>
                    <h3>Service Description</h3>
                    <textarea placeholder="service desc"></textarea>
                </div>
            <div>
                <h3>Add Location</h3>
                <input type="text" placeholder="Location"></input>
            </div>
            <div>
                <h3>Starting Price</h3>
                <input type="text" placeholder="Price" />
            </div>
            <div>
                <button>Done</button>
            </div>
          </div>
        
        </div>
      </div>
               
        )
}

export default CreateService;