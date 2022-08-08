import React,{useContext} from 'react'
import { Formik ,Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { UserContext} from "../Context/Usecontext"
import { number } from 'yup/lib/locale';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
export default function Add() {



    const {handleSubmit}=useContext(UserContext);
    

    //message error

    const validationSchema = Yup.object().shape({
        content: Yup.string()
            .min(5, "trop petit")
            .max(50, "trop long!")
            .required("Ce champ est obligatoire"),
        price: Yup.number()
        
            .required("Ce champ est obligatoire"),
     
        
    });





    const initialValues = {
        id:uuidv4(),
        content: "",
        price:"",
       
    };








    
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 pt-3">
                        <h1 className="text-center">Inscription</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values) =>handleSubmit(values)}
                        >
                            {/*  renitialiser les champs du formulaire */}
                            {({ resetForm }) => (
                                <Form>
                                    <div className="form-group mb-3">
                                        <label htmlFor="Name">
                                            Nom:
                                        </label>
                                        <Field
                                            type="text"
                                            id="content"
                                            name="content"
                                            className="form-control"
                                        />
                                        <ErrorMessage
                                            name="content"
                                            component="small"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="price">
                                            prix:
                                        </label>
                                        <Field
                                            type="number"
                                            id="price"
                                            name="price"
                                            className="form-control"
                                        />
                                        <ErrorMessage
                                            name="price"
                                            component="small"
                                            className="text-danger"
                                        />
                                    </div>
                                
                                    <div className="form-group d-flex justify-content-end gap-3">
                                    
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            S'inscrire
                                        </button>
                                        <Link to={{ pathname:"/"}} >
                                        <button
                                            type="button"
                                            onClick={resetForm}
                                            className="btn btn-danger"
                                        >
                                            Annuler
                                        </button>
                                        </Link>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        );
    };  

