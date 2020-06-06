import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../Theme';

const Wrapper = styled.div`
    margin: 0 50px;
    display: flex;
`

const Time = styled.span`
    display: inline-block;
    text-align: center;
    font-size: 70px;
    text-shadow: 1px 1px rgba(0,0,0,0.75), 2px 2px rgba(0,0,0,0.75);
    ${(props: { found: boolean }) => props.found ? `background-color: ${Theme.primaryAccent};` : ''};
    height: 100px;
    width: 100px;
    border-radius: 50%;
    line-height: 92px;
    box-shadow: 0px 10px 50px 10px rgba(0,0,0,.5), 0px 20px 50px 10px rgba(0,0,0,.5);

    transition-property: background;
    transition-duration: .3s;
    margin-right: 20px;
`

const AnswerText = styled.span`
    font-size: 70px;
    color: ${(props: { found: boolean }) => props.found ? Theme.primary : 'transparent'};
    text-shadow: ${(props: { found: boolean }) => props.found ? '1px 1px rgba(0,0,0,0.75), 2px 2px rgba(0,0,0,0.75)' : '0 0 25px rgba(0,0,0,0.5)'};
`

type AnswerProps = {
    score: number,
    found: boolean,
}

export class Answer extends React.Component<AnswerProps, {}> {

    render() {
        const { score, found } = this.props;
        return (
            <Wrapper>
                <Time found={found}>{found ? score : ''}</Time>
                <AnswerText found={found}>{this.props.children}</AnswerText>
            </Wrapper>
        );
    }
}
