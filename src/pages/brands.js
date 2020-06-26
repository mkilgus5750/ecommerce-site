import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import MiyazawaLogo from '../images/miyazawa_logo.png';
import MuramatsuLogo from '../images/murumatsu_logo.jpeg';
import SankyoLogo from '../images/sankyo_logo.jpg';
import './brands.css'

export default function brands() {
    return (
        <Layout>
            <div className="brands m-0 w-auto">
                <div className="grid justify-center brands_container">
                        <div className="brands_header">
                            <h1 className="text-2xl mb-4 grid justify-center">All Brands</h1>
                        </div>
                        <div className="border border-gray-300 mt-4 mb-4 w-64 h-64">
                            <Link to='/miyazawa'><img src={MiyazawaLogo}/></Link>
                        </div>
                        <div className="border border-gray-300 mt-4 mb-4 w-64 h-64">
                            <Link to='/murumatsu'><img src={MuramatsuLogo}/></Link >
                        </div>
                        <div className="border border-gray-300 mt-4 mb-4 w-64 h-64">
                            <Link to='/sankyo'><img src={SankyoLogo}/></Link>
                        </div>
                </div>
            </div>
        </Layout>
    )
}