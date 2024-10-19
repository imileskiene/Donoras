import axios from "axios";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
// import {  useNavigate } from "react-router-dom";
import "./Registracija.css";
import { useEffect } from "react";

function Registracija({ donor, setIsEditing, fetchDonors }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      id: donor ? donor.id : uuidv4(),
      firstName: donor ? donor.firstName : "",
      lastName: donor ? donor.lastName : "",
      age: donor ? donor.age : "",
      gender: donor ? donor.gender : "",
      bloodGroup: donor ? donor.bloodGroup : "",
    },
  });

  useEffect(() => {
    if (donor) {
      setValue("firstName", donor.firstName);
      setValue("lastName", donor.lastName);
      setValue("age", donor.age);
      setValue("gender", donor.gender);
      setValue("bloodGroup", donor.bloodGroup);
    }
  }, [donor, setValue]);

  const formSubmitHandler = async (data) => {
    const newDonor = {
      id: uuidv4(),
      ...data,
    };

    // console.log(newDonor);

    try {
      const response = donor
        ? await axios.put(`http://localhost:3000/donoras/${donor.id}`, newDonor)
        : await axios.post("http://localhost:3000/donoras", newDonor);

      console.log("Response:", response);

      if (response.status !== 200 && response.status !== 201) {
        throw new Error("Uuups! Something went wrong");
      }

      alert(
        donor ? "Donor successfully updated" : "Donor successfully created"
      );
      reset();
      if (setIsEditing) setIsEditing(false);
      if (fetchDonors) fetchDonors();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="donor-div">
        <h1>{donor ? "Redaguoti donorą" : "Sukurti naują donorą"}</h1>
        <form
          className="donor-form"
          onSubmit={handleSubmit(formSubmitHandler)}
          noValidate
        >
          <label htmlFor="firstName">Vardas:</label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: "name is required" })}
          />
          <div className="error">{errors.firstName?.message}</div>
          <br />
          <label htmlFor="lastName">Pavardė:</label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: "lastName is required" })}
          />
          <div className="error">{errors.lastName?.message}</div>
          <br />
          <label htmlFor="age">Amžius:</label>
          <input
            type="number"
            id="age"
            {...register("age", { required: "age is required" })}
          />
          <div className="error">{errors.age?.message}</div>
          <br />

          <label htmlFor="gender">Lytis</label>
          <select
            name="gender"
            id="gender"
            {...register("gender", { required: "gender is required" })}
          >
            <option value="vyras">Vyras</option>
            <option value="moteris">Moteris</option>
            <option value="kita lytis">Kita</option>
          </select>
          <div className="error">{errors.gender?.message}</div>
          <br />

          <label htmlFor="bloodGroup">Kraujo grupė: </label>
          <input
            type="text"
            id="bloodGroup"
            {...register("bloodGroup", {
              required: "bloodGroup URL is required",
            })}
          />
          <div className="error">{errors.bloodGroup?.message}</div>
          <br />

          <button className="register-button" type="submit">{donor ? "Patvirtinti redagavimą" : "Sukurti naują donorą"}</button>
          {donor && (
            <button className="register-button" type="button" onClick={() => setIsEditing(false)}>
              Atšaukti
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default Registracija;
