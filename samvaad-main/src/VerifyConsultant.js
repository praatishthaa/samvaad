import React, { useState } from 'react';

const ConsultantRegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        location: '',
        category: '',
        expertise: '',
        qualifications: '',
        certifications: '',
        experience: '',
        languages: [],
        availableDays: [],
        timeSlots: [],
        consultationMode: '',
        consultationFees: '',
        consultationAmount: '',
        consultationsPerWeek: '',
        shortBio: '',
        uploadResume: null,
        uploadProfilePicture: null,
        uploadID: null,
        uploadCertificates: null,
        linkedinProfile: '',
        portfolioLink: '',
        confirmInfo: false,
        agreeToCodeOfConduct: false,
        understandVerification: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData((prevState) => ({
                ...prevState,
                [name]: checked
            }));
        } else if (type === 'file') {
            setFormData((prevState) => ({
                ...prevState,
                [name]: e.target.files[0]
            }));
        } else if (type === 'select-multiple') {
            setFormData((prevState) => ({
                ...prevState,
                [name]: Array.from(e.target.selectedOptions, option => option.value)
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you'd typically send the form data to the backend
        console.log(formData);
        alert('Form submitted successfully!');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Consultant Registration Form</h2>

                {/* Personal Information */}
                <section>
                    <h3>Personal Information</h3>
                    <label>Full Name <span className="required">*</span></label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />

                    <label>Email Address <span className="required">*</span></label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Phone Number <span className="required">*</span></label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <label>Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                    />

                    <label>Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="preferNotToSay">Prefer not to say</option>
                    </select>

                    <label>Location (City, State)</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </section>

                {/* Professional Details */}
                <section>
                    <h3>Professional Details</h3>
                    <label>Category</label>
                    <select name="category" value={formData.category} onChange={handleChange}>
                        <option value="mentalHealth">Mental Health</option>
                        <option value="career">Career</option>
                        <option value="finance">Finance</option>
                    </select>

                    <label>Area of Expertise</label>
                    <input
                        type="text"
                        name="expertise"
                        value={formData.expertise}
                        onChange={handleChange}
                    />

                    <label>Educational Qualifications</label>
                    <input
                        type="text"
                        name="qualifications"
                        value={formData.qualifications}
                        onChange={handleChange}
                    />

                    <label>Certifications</label>
                    <textarea
                        name="certifications"
                        value={formData.certifications}
                        onChange={handleChange}
                    ></textarea>

                    <label>Years of Experience</label>
                    <select name="experience" value={formData.experience} onChange={handleChange}>
                        <option value="0-1">0–1 years</option>
                        <option value="1-3">1–3 years</option>
                        <option value="3-5">3–5 years</option>
                        <option value="5+">5+ years</option>
                    </select>

                    <label>Languages Spoken</label>
                    <select
                        name="languages"
                        multiple
                        value={formData.languages}
                        onChange={handleChange}
                    >
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="french">French</option>
                        <option value="spanish">Spanish</option>
                    </select>
                </section>

                {/* Availability */}
                <section>
                    <h3>Availability</h3>
                    <label>Available Days</label>
                    <input
                        type="checkbox"
                        name="availableDays"
                        value="monday"
                        checked={formData.availableDays.includes('monday')}
                        onChange={handleChange}
                    /> Monday
                    <input
                        type="checkbox"
                        name="availableDays"
                        value="tuesday"
                        checked={formData.availableDays.includes('tuesday')}
                        onChange={handleChange}
                    /> Tuesday
                    {/* Repeat for other days */}
                    
                    <label>Available Time Slots</label>
                    <input
                        type="checkbox"
                        name="timeSlots"
                        value="morning"
                        checked={formData.timeSlots.includes('morning')}
                        onChange={handleChange}
                    /> Morning
                    <input
                        type="checkbox"
                        name="timeSlots"
                        value="afternoon"
                        checked={formData.timeSlots.includes('afternoon')}
                        onChange={handleChange}
                    /> Afternoon
                    {/* Repeat for evening */}
                    
                    <label>Preferred Consultation Mode</label>
                    <select name="consultationMode" value={formData.consultationMode} onChange={handleChange}>
                        <option value="online">Online</option>
                        <option value="phone">Phone</option>
                        <option value="inPerson">In-person</option>
                    </select>
                </section>

                {/* Consultation Details */}
                <section>
                    <h3>Consultation Details</h3>
                    <label>Consultation Fees</label>
                    <select name="consultationFees" value={formData.consultationFees} onChange={handleChange}>
                        <option value="free">Free</option>
                        <option value="paid">Paid</option>
                    </select>

                    <label>Consultation Amount (if Paid)</label>
                    <input
                        type="number"
                        name="consultationAmount"
                        value={formData.consultationAmount}
                        onChange={handleChange}
                    />

                    <label>Number of Consultations Willing to Take Per Week</label>
                    <input
                        type="number"
                        name="consultationsPerWeek"
                        value={formData.consultationsPerWeek}
                        onChange={handleChange}
                    />

                    <label>Short Bio</label>
                    <textarea
                        name="shortBio"
                        value={formData.shortBio}
                        onChange={handleChange}
                        maxLength="300"
                    ></textarea>

                    <label>Upload Resume or Portfolio</label>
                    <input
                        type="file"
                        name="uploadResume"
                        onChange={handleChange}
                    />

                    <label>Upload Profile Picture</label>
                    <input
                        type="file"
                        name="uploadProfilePicture"
                        onChange={handleChange}
                    />
                </section>

                {/* Verification Documents */}
                <section>
                    <h3>Verification Documents</h3>
                    <label>Upload Government ID</label>
                    <input
                        type="file"
                        name="uploadID"
                        required
                        onChange={handleChange}
                    />

                    <label>Upload Certificates</label>
                    <input
                        type="file"
                        name="uploadCertificates"
                        onChange={handleChange}
                    />
                </section>

                {/* Social Links */}
                <section>
                    <h3>Social/Professional Links</h3>
                    <label>LinkedIn Profile</label>
                    <input
                        type="url"
                        name="linkedinProfile"
                        value={formData.linkedinProfile}
                        onChange={handleChange}
                    />

                    <label>Website/Portfolio Link</label>
                    <input
                        type="url"
                        name="portfolioLink"
                        value={formData.portfolioLink}
                        onChange={handleChange}
                    />
                </section>

                {/* Consent */}
                <section>
                    <label>
                        <input
                            type="checkbox"
                            name="confirmInfo"
                            checked={formData.confirmInfo}
                            onChange={handleChange}
                            required
                        /> I confirm all information is accurate and true.
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            name="agreeToCodeOfConduct"
                            checked={formData.agreeToCodeOfConduct}
                            onChange={handleChange}
                            required
                        /> I agree to Samwaad’s code of conduct and privacy policy.
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            name="understandVerification"
                            checked={formData.understandVerification}
                            onChange={handleChange}
                            required
                        /> I understand that Samwaad reserves the right to verify and approve consultants.
                    </label>
                </section>

                <button type="submit">Submit Registration</button>
            </form>
        </div>
    );
};

export default ConsultantRegistrationForm;
