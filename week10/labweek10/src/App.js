import { useState } from "react";
import './App.css';
//import Login from './components/Login';

function App() {

  const [values, setValues] = useState({
    email: '', 
    firstname: '', 
    address: '',
    address2: '', 
    city: '', 
    province: '',
    postalcode: '', atc: false
  })

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValues(values);
    console.log(values)
  }

  const [submittedValues, setSubmittedValues] = useState(null);

  return (
    <div className='info'>
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='text' placeholder='Enter Your Email' name='email'
        onChange={(e) => handleChanges(e) } value={values.email} required></input>

        <label htmlFor='firstname'>First Name</label>
        <input type='text' placeholder='Enter Your First Name' name='firstname'
        onChange={(e) => handleChanges(e) } value={values.firstname} required></input>

        <label htmlFor='address'>Address</label>
        <input type='text' placeholder='Enter Your address' name='address'
        onChange={(e) => handleChanges(e) } value={values.address} required></input>

        <label htmlFor='address2'>Address 2</label>
        <input type='text' placeholder='Enter Your second address' name='address2'
        onChange={(e) => handleChanges(e) } value={values.address2} ></input>

        <label htmlFor='city'>City</label>
        <input type='text' placeholder='Enter Your City' name='city'
        onChange={(e) => handleChanges(e) } value={values.city} required></input>

        <label htmlFor="province">Province</label> 
        <select name='province' id='province' onChange={(e) => handleChanges(e) } value={values.province} required>
          <option value="">Choose... </option>
          <option value="alberta">Alberta</option>
          <option value="britishcolumbia">British Columbia</option>
          <option value="manitoba">Manitoba</option>
          <option value="newbrunswick">New Brunswick</option>
          <option value="newfoundlandandlabrador">Newfoundland and Labrador</option>
          <option value="novascotia">Nova Scotia</option>
          <option value="ontario">Ontario</option>
          <option value="princeedwardisland">Prince Edward Island</option>
          <option value="quebec">Quebec</option>
          <option value="saskatchewan">Saskatchewan</option>
        </select>

        <label htmlFor='postalcode'>Postal Code</label>
        <input type='text' placeholder='Enter Your Postal Code' name='postalcode'
        onChange={(e) => handleChanges(e) } value={values.postalcode} required></input>

        <label htmlFor="atc">Agree Terms & Condition?</label> 
        <input type='checkbox' name='atc'
        onChange={(e) => handleChanges(e) } value={values.atc} required></input>

        <button type="submit">Submit</button>
      </form>

      {submittedValues && (
        <div className="submitted-results">
          <h2>Submitted Information</h2>
          <p><strong>Email:</strong> {submittedValues.email}</p>
          <p><strong>Full Name:</strong> {submittedValues.firstname}</p>
          <p><strong>Address:</strong> {submittedValues.address}</p>
          <p><strong>Address 2:</strong> {submittedValues.address2}</p>
          <p><strong>City:</strong> {submittedValues.city}</p>
          <p><strong>Province:</strong> {submittedValues.province}</p>
          <p><strong>Postal Code:</strong> {submittedValues.postalcode}</p>
         </div>
      )}
    </div>
  );
}

export default App;
