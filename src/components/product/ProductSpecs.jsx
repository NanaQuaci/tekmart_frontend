import React from 'react'

const ProductSpecs = () => {
    return (
        <div className="container bg-white shadow p-5">
            <div className="px-3 py-2 bg-white">

                {/* <!-- Specs--> */}
                <div className="d-flex flex-column">
                    <h3 className="">
                        Specification
                    </h3>

                    <hr />

                    <div>
                        <p className='mb-5'>
                            With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </p>


                        <table className="table table-striped-columns table-hover">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <th className="py-2">Display:</th>
                                    <td className="py-2">13.3-inch LED-backlit display with IPS</td>
                                </tr>
                                <tr>
                                    <th className="py-2">Processor capacity:</th>
                                    <td className="py-2">2.3GHz dual-core Intel Core i5</td>
                                </tr>
                                <tr>
                                    <th className="py-2">Camera quality:</th>
                                    <td className="py-2">720p FaceTime HD camera</td>
                                </tr>
                                <tr>
                                    <th className="py-2">Memory</th>
                                    <td className="py-2">8 GB RAM or 16 GB RAM</td>
                                </tr>
                                <tr>
                                    <th className="py-2">Graphics</th>
                                    <td className="py-2">Intel Iris Plus Graphics 640</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProductSpecs
