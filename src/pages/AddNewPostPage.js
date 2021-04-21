import React, {Component} from 'react';
import './addnewpostpage.scss';

import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import './../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import {BsFlagFill} from 'react-icons/bs';
import {MdPublish, MdVisibility} from 'react-icons/md';
import {AiOutlineSchedule, AiFillSave, AiOutlinePlus} from 'react-icons/ai';
import {FaReadme} from 'react-icons/fa';


export default class AddNewPostPage extends Component{

    constructor(){
        super();
        this.state = {
            editorState: EditorState.createEmpty(),
        };
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }

    onEditorStateChange(editorState){
        this.setState({
          editorState,
        });
    };

    render(){
        const { editorState } = this.state;
        let {category, title} = this.props;
        console.log(editorState)
        return (
            <div className="
                newpost 
                newpost--size 
                newpost--theme">
                
                {category && <h5 className="container__category">{category}</h5>}
                {title && <h1 className="container__title">{title}</h1>}

                <section className="newpost__container">
                    <section className="
                        newpost__left 
                        newpost__left--size 
                        newpost__left--theme">
                        <input className="newpost__input" placeholder="Your Post Title"  type="text"/>
                        <article className="
                            newpost__editor 
                            newpost__editor--size">
                            <Editor
                                placeholder="Words can be like x-rays if you use them properly..."
                                initialEditorState={editorState}
                                wrapperClassName="demo-wrapper"
                                editorClassName="demo-editor"
                                onEditorStateChange={this.onEditorStateChange}
                            />
                        </article>
                    </section>
                    <section className="newpost__right newpost__right--size newpost__right--theme">
                        <article className="newpost__card newpost__card--size newpost__card--theme">
                            <h4 className="newpost__card-title">Actions</h4>
                            <hr className="newpost__line" />
                            <ul className="newpost__list">
                                <li className="newpost__item">
                                    <BsFlagFill className="newpost__item-icon"/>
                                    <span>Status: Draft</span>
                                    <a href="/#edit" className="newpost__item-edit">Edit</a>
                                </li>
                                <li className="newpost__item">
                                    <MdVisibility className="newpost__item-icon"/>
                                    <span>Visibility:<span className="newpost__green"> Public</span></span>
                                    <a href="/#edit" className="newpost__item-edit">Edit</a>
                                </li>
                                <li className="newpost__item">
                                    <AiOutlineSchedule className="newpost__item-icon"/>
                                    <span>Schedule: Now</span>
                                    <a href="/#edit" className="newpost__item-edit">Edit</a>
                                </li>
                                <li className="newpost__item">
                                    <FaReadme className="newpost__item-icon"/>
                                    <span>Readability: <span className="newpost__orange">Ok</span></span>
                                </li>
                            </ul>
                            <hr className="newpost__line" />
                            <button className="newpost__button newpost__button-save">
                                <AiFillSave /> Save Draft
                            </button>
                            <button className="newpost__button newpost__button-publish">
                                <MdPublish /> Publish
                            </button>
                        </article>
                        <article className="newpost__card newpost__card--size newpost__card--theme">
                            <h4 className="newpost__card-title">Categories</h4>
                            <hr className="newpost__line" />
                            <ul className="newpost__categories">
                                <li className="newpost__category">
                                    <input type="checkbox" className="newpost__category-button" defaultChecked/>
                                    Uncategorized
                                </li>
                                <li className="newpost__category">
                                    <input type="checkbox" className="newpost__category-button" defaultChecked/>
                                    Design
                                </li>
                                <li className="newpost__category">
                                    <input type="checkbox" className="newpost__category-button" defaultChecked/> 
                                    Development
                                </li>
                                <li className="newpost__category">
                                    <input type="checkbox" className="newpost__category-button"/>
                                    Writing
                                </li>
                                <li className="newpost__category">
                                    <input type="checkbox" className="newpost__category-button"/>
                                    Books
                                </li>
                            </ul>
                            <hr className="newpost__line" />
                            <section className="newpost__category-row">
                                <input type="text" defaultValue="sdfasdfdsf" className="newpost__category-input"/>
                                <AiOutlinePlus className="newpost__category-icon"/>
                            </section>
                        </article>
                    </section>
                </section>
            </div>
        )
    }
}