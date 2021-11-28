import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { formValidator, requiredValidator } from './validators';

import Axios from 'axios';
import {
    FormDropDownList,
    FormInput,
    FormMaskedTextBox,
    FormNumericTextBox
} from "./form-components";

export class Edit extends Component {
    static displayName = Edit.name;
     
    constructor(props) {
        super(props);
        this.state = {
            popup:false,
            status:false,
            redirect:false,
            loading: false,
            create:false,
            stats: {  id:"",name: "na", description: "sdf", mana: 100, hp: 90, x: 0, y: 0, maxMana: 200, maxHp: 100, armor: 1, magResist: 1, attac: 10, AttackDistance:1, class: "Warrior" }
        };
        this.create = this.create.bind(this);

    }
    //popup
    //redirect from create
    //loading

    componentDidMount() {
        let id = this.props.match.params.id;
        console.log(id)
        if (id) {
            this.setState({ loading: true });
            this.populateUnitStats(id);
        }else{
            this.setState({ create: true });
        }

    }
  
    async create(data){
        console.log(data);
        this.state.stats=data;
        let sdata=this.state.stats;
        
        let method=this.state.create?'POST':'PUT';
        let url=this.state.create?'api/units/':'api/units/'+sdata.id;
        console.log(JSON.stringify(sdata));
       
         //await  console.log(JSON.stringify(response.body))
        
         Axios({
             method,
             url,
            data:sdata}
        )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          //if (response.ok){
            //this.setState.redirect=""
            //почему то апи не возврашяет гет с юрл именно тут....
         // }
        //console.log(response.headers)
        //console.log(response.url)
        //console.log(response)
          //return response.json(); 
    }

    

    handleSubmit = dataItem => this.create(dataItem)
    classes = ["Warrior", "Mage", "Archer"];
    render() {
        let f = <div>
            
            <Form initialValues={this.state.stats} validator={formValidator}
                onSubmit={this.handleSubmit} render={formRenderProps =>
                    <FormElement >
                        {!formRenderProps.errors.VALIDATION_SUMMARY?'':<div className={"k-messagebox k-messagebox-error"}>
                            
                            {formRenderProps.errors.VALIDATION_SUMMARY}
                            
                          </div>}
                        
                        <Field id={"name"} name={'name'} label={'Char Name'} hint={'example: 4doorsMoreWhores'} component={FormInput} validator={requiredValidator} />
                        <Field id={"description"} name={'description'} label={'description'} hint={'coment on'} component={FormInput} validator={requiredValidator} />

                        <Field id={"hp"} name={'hp'} label={'hp'} hint={'hp'} component={FormNumericTextBox} validator={requiredValidator} />

                        <Field id={"mana"} name={'mana'} label={'mana'} hint={'mana on'}  component={FormNumericTextBox} validator={requiredValidator} />

                        <Field id={"MaxHp"} name={'maxHp'} label={'MaxHp'} hint={'MaxHp on'}  component={FormNumericTextBox} validator={requiredValidator} />
                        <Field id={"MaxMana"} name={'maxMana'} label={'MaxMana'} hint={'MaxMana on'} component={FormNumericTextBox} validator={requiredValidator} />

                        <Field
                            id={"class"}
                            name={"class"}
                            label={"class"}
                            component={FormDropDownList}
                            data={this.classes}
                            validator={requiredValidator}
                        />
                        
                        <div className="k-form-buttons">
                            <Button primary={true} type={'submit'} disabled={!formRenderProps.allowSubmit}>
                                Submit
                            </Button>
                            <Button onClick={formRenderProps.onFormReset}>
                                Clear
                            </Button>
                        </div>
                    </FormElement>} />
        </div>



        let contents = this.state.create ? f
            :this.state.loading?<p><em>Loading...</em></p> : f;
      return (<div>{contents}</div>);
    }
    async populateUnitStats(id) {
        const response = await fetch('api/units/' + id);

        if (await response.status == 200) {
            const data = await response.json();
            this.setState({ stats: data, loading: false });
            console.log(this.state.stats)
        } else {
            console.log("wrong id");
        }

    }
}



