import React from "react";
import "./App.css";

const VerifyVolunteers = () => {
  return (
    <div className="form-container">
      <h2>🔹 Volunteer Registration Form</h2>

      <form className="volunteer-form">
        <fieldset>
          <legend>Personal Details</legend>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="date" required />
          <select required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            <option>Prefer not to say</option>
          </select>
          <input type="text" placeholder="Location (City, State)" />
        </fieldset>

        <fieldset>
          <legend>Availability</legend>
          <label>Preferred Volunteering Hours per Week:</label>
          <select>
            <option>1–5</option>
            <option>6–10</option>
            <option>11–15</option>
            <option>15+</option>
          </select>

          <label>Preferred Days:</label>
          <div className="checkbox-group">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <label key={day}>
                <input type="checkbox" value={day} /> {day}
              </label>
            ))}
          </div>

          <label>Time Slots:</label>
          <div className="checkbox-group">
            {["Morning", "Afternoon", "Evening"].map((slot) => (
              <label key={slot}>
                <input type="checkbox" value={slot} /> {slot}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>Skills & Interests</legend>
          <label>Areas of Interest:</label>
          <div className="checkbox-group">
            {[
              "Mental Health Awareness",
              "Social Media",
              "Event Planning",
              "Community Outreach",
              "Tech Support",
              "Content Writing",
            ].map((area) => (
              <label key={area}>
                <input type="checkbox" value={area} /> {area}
              </label>
            ))}
          </div>
          <textarea placeholder="Relevant Skills (e.g., Communication, Python)" />

          <input type="text" placeholder="Languages Known" />
        </fieldset>

        <fieldset>
          <legend>Experience & Motivation</legend>
          <label>Previous Volunteering Experience:</label>
          <div>
            <label><input type="radio" name="experience" value="yes" /> Yes</label>
            <label><input type="radio" name="experience" value="no" /> No</label>
          </div>
          <textarea placeholder="If yes, please provide details" />

          <textarea placeholder="Why do you want to volunteer with Samwaad?" />
          <select>
            <option>How did you hear about us?</option>
            <option>Referral</option>
            <option>Social Media</option>
            <option>Website</option>
            <option>Friend</option>
            <option>Other</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Documents</legend>
          <label>Upload Photo ID:</label>
          <input type="file" />
          <label>Upload Resume (Optional):</label>
          <input type="file" />
        </fieldset>

        <fieldset>
          <legend>Declaration</legend>
          <label>
            <input type="checkbox" required /> I confirm that the information provided is accurate.
          </label>
          <label>
            <input type="checkbox" required /> I agree to the terms and conditions and privacy policy of Samwaad.
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VerifyVolunteers;
