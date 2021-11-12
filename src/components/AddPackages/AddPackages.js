import React from 'react';
import { useForm } from "react-hook-form";

const AddPackages = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/addPackages", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        // console.log(data);
    }

    return (
        <div>

            <div>
                <h1 className="mt-5 text-center text-info">Please Add Packages</h1>
                <div className="w-100 m-auto mt-5">
                    <div className="border d-flex justify-content-center align-items-center">
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("location")}
                                    placeholder="Location"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                <input
                                    {...register("name")}
                                    placeholder="Package Name"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                <input
                                    {...register("date")}
                                    // placeholder="Name"
                                    type="date"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                <input
                                    {...register("description")}
                                    placeholder="Description"
                                    className="p-2 m-2 w-100"
                                />
                                <br />

                                <input
                                    {...register("image", { required: true })}
                                    placeholder="Image Link"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                <input
                                    {...register("price", { required: true })}
                                    placeholder="Price"
                                    type="number"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                {/* <select {...register("model")} className="p-2 m-2 w-100">
                                    <option value="premium">premium</option>
                                    <option value="classic">classic</option>
                                    <option value="business">business</option>
                                </select> */}
                                <br />

                                {errors.exampleRequired && <span>This field is required</span>}

                                <input
                                    type="submit"
                                    value="Add"
                                    className="btn btn-warning mx-auto w-50"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPackages;