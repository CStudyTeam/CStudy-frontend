import React from 'react';
import * as Styled from './style';
import Button from 'components/@shared/Button';
import { Link } from 'react-router-dom';
import StyleLink from 'components/@shared/StyleLink';

const Contents = () => {
    return (
        <>
            <Styled.Section>
                <Styled.Wrapper>
                    <Styled.ContentsTitleImg>
                        <Styled.Title>
                            CS공부 아직도 재미없는
                            <br />
                            해외 전공서적으로 공부하시나요?
                        </Styled.Title>
                        <Styled.ContentsImg src="https://via.placeholder.com/543x320" alt="컨텐츠 이미지" />
                    </Styled.ContentsTitleImg>
                    <Styled.ContentsItem>
                        <Styled.ContentsTexts>
                            <Styled.ContentsTextsTitle>책을 읽기 힘든 분들에게 추천해요!</Styled.ContentsTextsTitle>
                            <br />
                            <Styled.ContentsTextsDesc>
                                안그래도 재미없는 전공! 한국어도 아닌 영어로 머리를 싸매고 힘들어하고 있으신가요?
                                <br />
                                쉽게 접근 할 수 있는 방법 없을까? 라고 고민해 본적 한번이라도 있으신가요?
                                <br />
                                <Styled.ContentsTextDescBold>
                                    <br />
                                    그래서 준비했습니다!
                                </Styled.ContentsTextDescBold>
                                <br />
                                CSTUDY는 어려운 CS를 문제풀이 형식으로 필요한 지식을
                                <br />
                                더욱 쉽게 접근 하고 학습 할 수 있게 도와줍니다.
                            </Styled.ContentsTextsDesc>
                            <StyleLink to="/problemset" className="xl navy style">
                                문제 풀러 가기
                            </StyleLink>
                        </Styled.ContentsTexts>
                    </Styled.ContentsItem>
                </Styled.Wrapper>
            </Styled.Section>
            <Styled.Section>
                <Styled.Wrapper>
                    <Styled.ContentsItem>
                        <Styled.ContentsTexts>
                            <Styled.ContentsTextsTitle>선의의 경쟁을 통해 꾸준히 성장해요!</Styled.ContentsTextsTitle>
                            <br />
                            <Styled.ContentsTextsDesc>
                                개발자는 계속 성장해야 하는 직업 입니다.
                                <br />
                                많은 시니어 개발자들이 시니어 개발자가 되기 위한 덕목중 CS지식을 꼽을 정도로 CS 지식은
                                중요합니다. 하지만, 너무 어려운 것도 사실 입니다.
                                <br />
                                <br />
                                CSTUDY의 랭킹 시스템은 혼자 공부 하기 힘들고 어렵지만, 어려움을 딛고 같이 성장하기 위해
                                노력하는 동료들을 확인하고 선의의 경쟁을 위해 준비했습니다.
                            </Styled.ContentsTextsDesc>
                            <StyleLink to="/problemset" className="xl navy style">
                                랭킹 확인 하기
                            </StyleLink>
                        </Styled.ContentsTexts>
                    </Styled.ContentsItem>
                    <Styled.ContentsTitleImg>
                        <Styled.Title>점수와 랭킹을 올려 랭커에 도전 하세요!</Styled.Title>
                        <Styled.ContentsImg src="https://via.placeholder.com/543x320" alt="컨텐츠 이미지" />
                    </Styled.ContentsTitleImg>
                </Styled.Wrapper>
            </Styled.Section>
            <Styled.Section>
                <Styled.Wrapper>
                    <Styled.ContentsTitleImg>
                        <Styled.Title>
                            CS공부 아직도 재미없는
                            <br />
                            해외 전공서적으로 공부하시나요?
                        </Styled.Title>
                        <Styled.ContentsImg src="https://via.placeholder.com/543x320" alt="컨텐츠 이미지" />
                    </Styled.ContentsTitleImg>
                    <Styled.ContentsItem>
                        <Styled.ContentsTexts>
                            <Styled.ContentsTextsTitle>책을 읽기 힘든 분들에게 추천해요!</Styled.ContentsTextsTitle>
                            <br />
                            <Styled.ContentsTextsDesc>
                                안그래도 재미없는 전공! 한국어도 아닌 영어로 머리를 싸매고 힘들어하고 있으신가요?
                                <br />
                                쉽게 접근 할 수 있는 방법 없을까? 라고 고민해 본적 한번이라도 있으신가요?
                                <br />
                                <Styled.ContentsTextDescBold>
                                    <br />
                                    그래서 준비했습니다!
                                </Styled.ContentsTextDescBold>
                                <br />
                                CSTUDY는 어려운 CS를 문제풀이 형식으로 필요한 지식을
                                <br />
                                더욱 쉽게 접근 하고 학습 할 수 있게 도와줍니다.
                            </Styled.ContentsTextsDesc>
                            <StyleLink to="/problemset" className="xl navy style">
                                문제 풀러 가기
                            </StyleLink>
                        </Styled.ContentsTexts>
                    </Styled.ContentsItem>
                </Styled.Wrapper>
            </Styled.Section>
        </>
    );
};

export default Contents;
