import { injectGlobal } from "styled-components";
import * as Colors from "./colors";
import * as Type from "../style/typography";
import * as BreakPoints from "../style/breakpoints";
import * as Spacing from "../style/spacing";

injectGlobal`
:root{
    input[type="text"] {
        font-size:20px;
        font-family: 'Sailec-REGULAR';

    }
    input[type="email"] {
        font-size:20px;
        font-family: 'Sailec-REGULAR';
    }
    textarea {
        font-size:20px;
        font-family: 'Sailec-REGULAR';
    }
    font-size: 100%;
    body{
        margin: 0;
        font-size: 1rem;
        }
    }
    h1{
        ${Type.LARGEHEADER};
    }
    h2{
       ${Type.SUBHEADER};  
       text-algin: center; 
       ${BreakPoints.SMALL} {
            padding-top: ${Spacing.LARGE};
            padding-bottom: ${Spacing.XSMALL};                      
            }
        ${BreakPoints.MEDIUM} {  
            padding-top: ${Spacing.LARGE};
            padding-bottom: ${Spacing.SMALL};           
            }
        ${BreakPoints.LARGE}{ 
            padding-top: ${Spacing.XLARGE};
            padding-bottom: ${Spacing.MEDIUM}      
            }
        ${BreakPoints.XLARGE} { 
            padding-top: ${Spacing.XXLARGE};
            padding-bottom: ${Spacing.LARGE};
            }
        ${BreakPoints.XXLARGE} { 
            padding-top: ${Spacing.XXLARGE};
            padding-bottom: ${Spacing.LARGE};
        }
    }
    h3{
        ${Type.LARGEBODY};
        ${BreakPoints.SMALL} {
            padding-top: ${Spacing.MEDIUM};
            padding-bottom: ${Spacing.SMALL};                      
            }
        ${BreakPoints.MEDIUM} {  
            padding-top: ${Spacing.LARGE};
            padding-bottom: ${Spacing.SMALL};           
            }
        ${BreakPoints.LARGE}{ 
            padding-top: ${Spacing.XLARGE};
            padding-bottom: ${Spacing.SMALL}      
            }
        ${BreakPoints.XLARGE} { 
            padding-top: ${Spacing.XXLARGE};
            padding-bottom: ${Spacing.MEDIUM};
            }
        ${BreakPoints.XXLARGE} { 
            padding-top: ${Spacing.XXLARGE};
            padding-bottom: ${Spacing.MEDIUM};
        }
    }
   
    h4{
        ${Type.SMALLHEADER};
        padding-bottom: ${Spacing.MEDIUM} 
    }
    th{
        ${Type.SMALLHEADER};
        ${BreakPoints.SMALL} {
            padding-bottom: .15rem;  
            padding-right: 15px;              
        }
        ${BreakPoints.MEDIUM} {  
            padding-bottom: .15rem;
            padding-right: 20px;              
        }
        ${BreakPoints.LARGE}{ 
            padding-bottom: .15rem;
            padding-right: 10rem;              
        }
        ${BreakPoints.XLARGE} { 
            padding-bottom: .15rem;
            padding-right:15rem;              
        }
        ${BreakPoints.XXLARGE} { 
            padding-bottom: .15rem;
            padding-right:15rem;              
        }
    }
    tr {
        ${Type.BODY};
        padding-bottom: ${Spacing.SMALL}; 
       
    }
    p{
        ${Type.BODY};
    }
  
    th {
        display: table-cell;
        vertical-align: inherit;
        font-weight: bold;
        text-align: left;
    }
     a{
        text-decoration: none;
        color: ${Colors.PRIMARY};
        transition: all 0.4s ease-in;
        &:hover {
            color: ${Colors.BLACK};
            text-underline: none;
          }
    }
    ol{
     ${Type.BODY};
     margin-left: 40px;

    }
    ul{
        ${Type.BODY};
        margin-left: 40px;
       }
    }
`;
