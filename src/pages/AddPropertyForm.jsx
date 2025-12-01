import { useState } from "react";
import "./AddPropertyForm.css"

export default function AddPropertyForm() {
  const [formData, setFormData] = useState({
    title: "",
    propertyType: "",
    houseType: "",
    city: "",
    estate: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    parking: "",
    image: "",
    images: [""],
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (index, value) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData((prev) => ({
      ...prev,
      images: newImages,
    }));
  };

  const addImageField = () => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ""],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProperty = {
      ...formData,
      price: Number(formData.price),
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      parking: Number(formData.parking),
      createdAt: new Date().toISOString(),
    };

    const res = await fetch("http://localhost:3001/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProperty),
    });

    if (res.ok) {
      alert("Property added successfully!");
      location.reload();
    } else {
      alert("Error adding property.");
    }
  };

  return (
    <main>
      <section>
        <div className="section-padding">
          <form id="property-form" onSubmit={handleSubmit}>
            <div className="form-item">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-input"
                placeholder="Add the post title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="propertyType">Property Type (rent/sale)</label>
              <input
                type="text"
                id="propertyType"
                name="propertyType"
                className="form-input"
                placeholder="Enter the property type eg For Rent/For Sale"
                value={formData.propertyType}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="houseType">House Type</label>
              <input
                type="text"
                id="houseType"
                name="houseType"
                className="form-input"
                 placeholder="Enter the house type eg Apartment"
                value={formData.houseType}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                className="form-input"
                placeholder="Enter the city eg Nairobi"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="estate">Estate</label>
              <input
                type="text"
                id="estate"
                name="estate"
                className="form-input"
                placeholder="Enter the estate eg Kilimani"
                value={formData.estate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                className="form-input"
                placeholder="Enter the price"

                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="bedrooms">Bedrooms</label>
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                className="form-input"
                                placeholder="Enter the number of bedrooms"

                value={formData.bedrooms}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="bathrooms">Bathrooms</label>
              <input
                type="number"
                id="bathrooms"
                name="bathrooms"
                className="form-input"
                                placeholder="Enter the number of bathrooms"

                value={formData.bathrooms}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="parking">Parking Spaces</label>
              <input
                type="number"
                id="parking"
                name="parking"
                className="form-input"
                                placeholder="Enter the number of parking spaces"

                value={formData.parking}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="image">Main Image URL</label>
              <input
                type="text"
                id="image"
                name="image"
                className="form-input"
                                placeholder="Enter ta link to the image"

                value={formData.image}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-item hide">
              <label>Additional Images (URLs)</label>

              <div id="images-container">
                {formData.images.map((img, index) => (
                  <input
                    key={index}
                    type="text"
                    className="form-input"
                    placeholder={`Image URL ${index + 1}`}
                    value={img}
                    onChange={(e) =>
                      handleImageChange(index, e.target.value)
                    }
                  />
                ))}
              </div>

              <button type="button" id="add-image-btn" onClick={addImageField}>
                Add More Images
              </button>
            </div>

            <div className="form-item full-width-item">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                className="form-input"
                rows="5"
                value={formData.description}
                                placeholder="Enter a brief deescription of the property"

                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button className="button" type="submit">
              Submit Property
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
