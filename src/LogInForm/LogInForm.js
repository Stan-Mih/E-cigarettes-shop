import React from 'react';
import { useForm } from 'react-hook-form';
import styles from "../LogInForm/LogInContainer.module.css"

export default function LogInForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log({errors});

    return (
        <div className={styles.logInForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.logInContainer}>
                    <input type="text" placeholder="username" {...register("username", { required: true, pattern: /^[a-zA-Z0-9_]{4,16}$/i })} />
                    <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <input
                        type="password"
                        placeholder="password"
                        {...register("password",
                            { required: true, pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@#$%^&+=]{8,}$/i })} />

                    <input type="submit" />
                </div>
            </form>
        </div>
    );
}