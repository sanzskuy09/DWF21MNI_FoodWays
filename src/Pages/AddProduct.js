import InputImage from "../Assets/Images/input-img.png";

const AddProduct = () => {
  return (
    <div className="container">
      <div className="container-edit">
        <div className="profile">
          <h3 className="title-profile">Add Product</h3>
          <div className="profile-wrapper">
            <div className="text-input">
              <input type="text" className="" placeholder="Title" />
              <input type="file" id="file" className="col-md-2" />
              <label for="file">
                Attach Image
                <img src={InputImage} alt="" />
              </label>
            </div>
            <div className="text-input">
              <input type="text" className="col-md-12" placeholder="Price" />
            </div>
            <div className="input-save save-product">
              <button className="btn btn-save"> Save </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
