import { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { getUser } from "../../utils/backend/functions";
import { NavLink } from 'react-router-dom';

import './User.css'

function UserHome() {
    const user = useLoaderData();
    const navigate = useNavigate();

    return (
        <section className="user-home">
            <section className="user-data">

            </section>
            <section className="user-options">
                <article className="user-option__favorites">

                </article>
                <article className="user-option__reviews">

                </article>
            </section>
        </section>
    )
}