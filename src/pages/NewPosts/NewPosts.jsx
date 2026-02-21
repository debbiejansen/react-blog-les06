import './NewPosts.css'
import React from 'react';
import { useForm } from 'react-hook-form';

function NewPosts() {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm();

    function handleFormSubmit(data) {
        console.log(data);
        reset()
    }

        return (

            <form className="form-layout" onSubmit={handleSubmit(handleFormSubmit)}>
                <h2>Vul hier jouw blog in</h2>
                <label htmlFor="title-field">
                    <input
                        type="text"
                        id="title-field"
                        placeholder={errors.title ? errors.title.message : "Titel"}
                        className={errors.title ? "input-error" : "" }
                        {...register("title", {
                            required: {
                                value: true,
                                message: 'Titel is verplicht',
                            }
                        })}
                    />
                </label>

                <label htmlFor="subtitle-field">
                    <input
                        type="text"
                        id="subtitle-field"
                        placeholder={errors.subtitle ? errors.subtitle.message : "Subtitel"}
                        className={errors.subtitle ? "input-error" : "" }
                        {...register("subtitle",{
                        required: {
                            value: true,
                            message: 'Subtitel is verplicht',
                        }
                        })}
                    />
                </label>

                <label htmlFor="author-field">
                    <input
                        type="text"
                        id="author-field"
                        placeholder={errors.author ? errors.author.message : "Auteur"}
                        className={errors.author ? "input-error" : "" }
                        {...register("author", {
                            required: {
                                value: true,
                                message: 'Auteur is verplicht',
                            }
                        })}
                    />
                </label>

                <label htmlFor="content-field">
                    <textarea
                        id="content-field"
                        placeholder="Vul hier jouw blog in"
                        className={errors.content ? "input-error" : "" }
                        {...register("content", {
                            required: {
                                value: true,
                                message: 'Dit veld is verplicht',
                            },
                            minLength: {
                                value: 300,
                                message: 'Vul minimaal 300 karakters in',
                            },
                            maxLength: {
                                value: 2000,
                                message: 'Maximaal 2000 karakters',
                            }
                        })}
                    >
        </textarea>
                </label>
                {errors.content && <p className="error-message">{errors.content.message}</p>}


                <button type="submit">
                    Versturen
                </button>
            </form>
        );
    }

export default NewPosts