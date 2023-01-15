import "./FilterComponent.css";

const FilterComponent = ({ handleFilter }) => {
 

  return (
    <div>
      <div>
        <h3>Color</h3>
        <div>
          <input
            type="checkbox"
            name="Color"
            id="red"
            value="Red"
            onChange={handleFilter}
          />
          <label htmlFor="red">Red</label>
        </div>

        <div>
          <input
            type="checkbox"
            name="Color"
            id="blue"
            value="Blue"
            onChange={handleFilter}
          />
          <label htmlFor="blue">Blue</label>
        </div>

        <div>
          <input
            type="checkbox"
            name="Color"
            id="green"
            value="Green"
            onChange={handleFilter}
          />
          <label htmlFor="green">Green</label>
        </div>
      </div>

      <div>
        <h2>Gender</h2>
        <div>
          <input
            type="checkbox"
            name="Gender"
            id="men"
            value="Men"
            onChange={handleFilter}
          />
          <label htmlFor="men">Men</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="Gender"
            id="women"
            value="Women"
            onChange={handleFilter}
          />
          <label htmlFor="women">Women</label>
        </div>
      </div>
      <div>

        <h2>Price</h2>
        <div>
            <input type="checkbox" name="Price" id="price" value="0-250"   onChange={handleFilter}/>
            <label htmlFor="price">0-Rs250</label>
        </div>
        <div>
            <input type="checkbox" name="Price" id="price" value="251-450"  onChange={handleFilter} />
            <label htmlFor="price">Rs251-Rs450</label>
        </div>
        <div>
            <input type="checkbox" name="Price" id="price" value="451-1000"   onChange={handleFilter}/>
            <label htmlFor="price">Rs450</label>
        </div>
      </div>

      <div>
        <h2>Type</h2>
        <div>
          <input
            type="checkbox"
            name="Type"
            id="polo"
            value="Polo"
            onChange={handleFilter}
          />
          <label htmlFor="polo">Polo</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="Type"
            id="hoodie"
            value="Hoodie"
            onChange={handleFilter}
          />
          <label htmlFor="hoodie">Hoodie</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="Type"
            id="basic"
            value="Basic"
            onChange={handleFilter}
          />
          <label htmlFor="basic">Basic</label>
        </div>
      </div>

     
    </div>
  );
};

export default FilterComponent;
