const Form1 = () => {
  return (
    <form className="row cs_row_gap_30 cs_gap_y_30" id="cs_form">
      <div className="col-sm-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="cs_form_field cs_radius_5"
        />
      </div>
      <div className="col-sm-6">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="cs_form_field cs_radius_5"
        />
      </div>
      <div className="col-sm-6">
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="cs_form_field cs_radius_5"
        />
      </div>
      <div className="col-sm-6 position-relative">
        <select className="form-select cs_form_field cs_radius_5">
          <option value="cooling-Choose">Choose Service Type</option>
          <option value="split-system">Split System Service</option>
          <option value="evaporative-cooling">Evaporative Cooling</option>
          <option value="ducted-refrigeration">Ducted Refrigeration</option>
          <option value="emergency-repair">Emergency Repair</option>
          <option value="maintenance">Regular Maintenance</option>
          <option value="installation">New Installation</option>
        </select>
      </div>
      <div className="col-12">
        <textarea
          name="message"
          rows="6"
          placeholder="Describe your cooling system issue or service requirements..."
          className="cs_form_field"
        ></textarea>
      </div>
      <div className="col-12">
        <button type="submit" className="cs_btn cs_style_1 wow fadeInRight">
          <span>Get Quote</span>
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </form>
  );
};

export default Form1;
