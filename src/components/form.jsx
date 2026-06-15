import { useState } from "react";
import "./styles/form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    feedback: "",
  });

  const [arr, setArr] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setArr([...arr, formData]);

    setFormData({
      name: "",
      feedback: "",
    });
  };

  return (
    <div className="container">
      <h1>Feedback Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <textarea
          name="feedback"
          placeholder="Enter your feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      <div className="feedback-list">
        {arr.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.name}</h3>
            <p>{item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;