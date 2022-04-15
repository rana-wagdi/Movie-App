import React, {useState} from "react";



const Filter = (props) => {


    return (
      <section className="filter">
        <div>
          <form>
            <input
              name="search"
              id="search"
              className="form-control icon"
              onChange={props.change}
              placeholder="  &#xf002;     MovieName...."
              type="text"
            />
          </form>
        </div>
      </section>
    );   
}
export default Filter;