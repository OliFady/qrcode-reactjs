import React,{useState} from 'react'
import axios from 'axios';
import './AddScouts.css';

function AddScouts() {
    const [formData, setFormData] = useState({name: "",grade: "",birthdate: "",phone:0,fatherphone:0,motherphone:0});

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        const res = await axios.post("https://rntbktcj-8080.euw.devtunnels.ms/addscouts",
        JSON.stringify(formData), 
    {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res)
    }; 

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

      <label htmlFor="grade">Grade:</label>
      <input type="text" id="grade" name="grade" value={formData.grade} onChange={handleChange}/>

      <label htmlFor="birthdate">BirthDate:</label>
      <input type="text" id="birthdate" name="birthdate" value={formData.birthdate} onChange={handleChange}/>
 
      <label htmlFor="phone">Phone:</label>
      <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange}/>

     <label htmlFor="fatherphone">Father's Phone:</label>
      <input type="text" id="fatherphone" name="fatherphone" value={formData.fatherphone} onChange={handleChange}/>

    <label htmlFor="motherphone">Mother's Phone:</label>
      <input type="text" id="motherphone" name="motherphone" value={formData.motherphone} onChange={handleChange}/>


      <button type="submit">Submit</button>
    </form>
  )

}

export default AddScouts