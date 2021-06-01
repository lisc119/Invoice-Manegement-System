import React, { Fragment } from 'react';
import { FormGroup, Label2, Input2 } from '../../style/Inputs';
import Titles100 from "../BaseComponents/Titles/Titles100";
import UploadIcon from '../../assets/svgs/icon-upload-yellow.svg';
import { StandardWindowDataUpload, TopGroup, UploadPart, FormGroupUpload, IconUpload, FormGroupComment,
    ResultsText, ResultsGreen, ResultsRed, YellowButtonStyleUpload, Results, ButtonUpload,
    MiddleGroup, BottomGroup, SpaceLeft, SpaceRight,
    CheckPriceDiv, CheckDiv, PriceDiv, YellowButtonStyle} from "../../style/DataPageUpload";



const Upload = () => {
    return (
        <Fragment>
            <StandardWindowDataUpload>
                <TopGroup>

                    <Titles100 title={"Upload data"} />

                    <form>
                        <UploadPart>
                            <FormGroupUpload style={{width: "100%"}}>
                                <Input2 style={{width: "100%"}} type="text" name="Upload" id="Upload" />
                                <IconUpload for="Upload">Upload</IconUpload>
                                <img src={UploadIcon}/>
                            </FormGroupUpload>
                            <FormGroup style={{width: "100%"}}>
                                <Input2 style={{width: "100%"}} type="text" name="Comment" id="Comment" />
                                <Label2 for="Comment">Comment</Label2>
                            </FormGroup>
                        </UploadPart>
                        <ResultsText>
                            <Results>
                                <ResultsGreen>
                                    <p>Upload succeeded - please check it and add your tags</p>
                                </ResultsGreen>
                                <ResultsRed>
                                    <p>Upload failed - please try it again</p>
                                </ResultsRed>
                            </Results>
                            <ButtonUpload>
                                 <YellowButtonStyleUpload>
                                    Upload data
                                </YellowButtonStyleUpload>
                            </ButtonUpload>
                        </ResultsText>
                    </form>
                </TopGroup>

                <MiddleGroup>
                    <FormGroup>
                        <Input2 type="text" name="Item" id="Item" />
                        <Label2 for="Item">Item</Label2>
                    </FormGroup>
                    <FormGroup>
                        <Input2 type="text" name="Quantity" id="Quantity" />
                        <Label2 for="Quantity">Quantity</Label2>
                    </FormGroup>
                    <FormGroup>
                        <Input2 type="text" name="Price" id="Price" />
                        <Label2 for="Price">Price</Label2>
                    </FormGroup>
                    <FormGroup>
                        <Input2 type="text" name="Tag" id="Tag" />
                        <Label2 for="Tag">Tag</Label2>
                    </FormGroup>
                </MiddleGroup>

                <BottomGroup>
                    <SpaceLeft/>
                    <SpaceRight>
                        <CheckPriceDiv>
                            <CheckDiv>Check total price</CheckDiv>
                            <PriceDiv>38.85</PriceDiv>
                        </CheckPriceDiv>
                        <YellowButtonStyle>
                            Save changes
                        </YellowButtonStyle>
                    </SpaceRight>
                </BottomGroup>

            </StandardWindowDataUpload>
        </Fragment>
    );
};

export default Upload