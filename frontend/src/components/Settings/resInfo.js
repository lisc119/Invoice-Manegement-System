import React, { Fragment } from 'react';

import {
  Container5050, TopGroup, UploadPart, MiddleGroup, MiddleGroupLeft, BottomGroup,
  SpaceLeft, SpaceRight, StandardWindowUserProfile,
  StandardWindowRestaurant, YellowButtonStyle
} from "./style";
import Titles50 from "../BaseComponents/Titles/Titles50";
import {FormGroup, Input2, Label2} from "../../style/Inputs";
import {Group1, Group2, Group3, Group4} from "./style";


const ResInfo = () => {

    return (
        <Fragment>
            {/* <StandardWindow>

            </StandardWindow> */}

            <Container5050>
            <StandardWindowUserProfile>
            <TopGroup>
                <Titles50 title={"Profile"}/>
                <form>
                <UploadPart>
                    <Input2 type="text" name="user" id="user"/>
                    <Label2 for="user">Username</Label2>
                </UploadPart>
                </form>
            </TopGroup>
            <MiddleGroupLeft>
                {/* <FormGroup>
                    <Input2 type="email" name="email" id="email"/>
                    <Label2 for="email">Email</Label2>
                </FormGroup>
              
                <Input2 type="password" name="password" id="password"/>
                <Label2 for="password">Password</Label2> */}
            </MiddleGroupLeft>
            <BottomGroup>
                <SpaceLeft/>
                <SpaceRight>
                <YellowButtonStyle>
                    Save changes
                </YellowButtonStyle>
                </SpaceRight>
            </BottomGroup>
            </StandardWindowUserProfile>
            <StandardWindowRestaurant>
            <TopGroup>
                <Titles50 title={"Restaurant Profile"}/>
            </TopGroup>
            <MiddleGroup>
                <Group1>
                <FormGroup>
                    <Input2 type="RestName" name="RestName" id="RestName"/>
                    <Label2 for="RestName">Restaurant Name</Label2>
                </FormGroup>
                <FormGroup>
                    <Input2 type="Internet" name="Internet" id="Internet"/>
                    <Label2 for="Internet">Internet</Label2>
                </FormGroup>
                </Group1>
                <Group2>
                <FormGroup>
                    <Input2 type="Street" name="Street" id="Street"/>
                    <Label2 for="Street">Street</Label2>
                </FormGroup>
                <FormGroup>
                    <Input2 type="Text" name="Number" id="Number"/>
                    <Label2 for="Number">Number</Label2>
                </FormGroup>
                </Group2>
                <Group3>
                <FormGroup>
                    <Input2 type="ZipCode" name="ZipCode" id="ZipCode"/>
                    <Label2 for="ZipCode">Zip Code</Label2>
                </FormGroup>
                <FormGroup>
                    <Input2 type="City" name="City" id="City"/>
                    <Label2 for="City">City</Label2>
                </FormGroup>
                </Group3>
                <Group4>
                <FormGroup>
                    <Input2 type="Phone" name="Phone" id="Phone"/>
                    <Label2 for="Phone">Phone</Label2>
                </FormGroup>
                </Group4>

            </MiddleGroup>
            <BottomGroup>
                <SpaceLeft/>
                <SpaceRight>
                <YellowButtonStyle>
                    Save changes
                </YellowButtonStyle>
                </SpaceRight>
            </BottomGroup>
            </StandardWindowRestaurant>
        </Container5050>

            

        </Fragment>
    );
};

export default ResInfo