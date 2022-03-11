import React, { useState, useRef } from "react";
import { useRecoilValue } from "recoil";
import axios from "src/lib/axios";
import { userState } from "src/lib/states";
import { Input } from "./input";

type User = { user?: any; access?: any };

export default function Vehicle({ setMessage }) {
  const Vehicle = {
    name: "",
    price: "",
    description: "",
    capacity: 0,
    vehicle_type: "",
    brand: "",
    model: "",
  };
  const user: User = useRecoilValue(userState);

  const [vehicle, setVehicle] = useState(Vehicle);
  const [loading, setLoading] = useState(false);
  const image = useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    var start = new Date().getTime();

    // console.log(vehicle, image.current.files[0], image.current.files[0].name);
    const formData = new FormData();
    for (var key in vehicle) {
      formData.append(key, vehicle[key]);
    }
    formData.append(
      "image",
      image.current.files[0],
      image.current.files[0].name
    );
    const userConfig = {
      headers: {
        Authorization: "Bearer " + user?.access,
      },
    };
    axios
      .post("/api/v1/vehicles/", formData, userConfig)
      .then((res) => {
        console.log(res);
        var end = new Date().getTime();
        var time = end - start;
        setMessage(
          "Vehicle has been created. | Execution time: " + time + " ms"
        );
        e.target.reset();
        setVehicle(Vehicle);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      setMessage();
    }, 20000);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="border-t border-gray-200 text-[15px]">
        <Input
          title="Title"
          type="text"
          name="name"
          value={vehicle.name}
          handleChange={handleChange}
        />
        <Input
          title="Price"
          white={true}
          type="number"
          name="price"
          value={vehicle.price}
          handleChange={handleChange}
        />
        <dl className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className=" font-medium text-gray-500">Description</dt>
          <dd className="mt-1  text-gray-900 sm:col-span-2 sm:mt-0">
            <textarea
              className="w-full rounded-lg border px-3 py-2 focus:border-indigo-500 focus:shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              name="description"
              rows={6}
              value={vehicle.description}
              onChange={handleChange}
              required
            />
          </dd>
        </dl>
        <Input
          title="Capacity"
          white={true}
          type="number"
          name="capacity"
          value={vehicle.capacity}
          handleChange={handleChange}
        />
        <Input
          title="Vehicle Type"
          type="text"
          name="vehicle_type"
          value={vehicle.vehicle_type}
          handleChange={handleChange}
        />
        <Input
          title="Brand"
          white={true}
          type="text"
          name="brand"
          value={vehicle.brand}
          handleChange={handleChange}
        />
        <Input
          title="Model"
          type="text"
          name="model"
          value={vehicle.model}
          handleChange={handleChange}
        />

        <dl className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className=" font-medium text-gray-500">Image</dt>
          <dd className="mt-1  text-gray-900 sm:col-span-2 sm:mt-0">
            <input
              className="w-full rounded-lg border px-3 py-2 focus:border-indigo-500 focus:shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              name="image"
              type="file"
              ref={image}
              required
              accept="image/png, image/jpeg"
            />
          </dd>
        </dl>
      </div>
      <div className="bg-gray-200 px-3 py-2 text-right">
        <button
          type="submit"
          onClick={() => setLoading(true)}
          className="rounded-lg bg-gray-800 px-3 py-2 text-sm font-normal tracking-wider text-white hover:bg-gray-800/90 hover:shadow-md"
        >
          <div className="flex shrink-0 items-center space-x-2">
            {loading ? (
              <svg
                className="h-4 w-4 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              ""
            )}
            <span>Save</span>
          </div>
        </button>
      </div>
    </form>
  );
}
