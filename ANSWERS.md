1. [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
2. [ ] Describe a life-cycle event in React?
3. [ ] Explain the details of a Higher Order Component?
4. [ ] What are three different ways to style components in React? Explain some of the benefits of each.

1. Proptypes are used for checking that the data we expect to see is there if not it will return an error. Its important to have in applications especially larger apps to prevent bugs from occuring and possible obvious problems within ones codebase.

2. ComponentDIDUpdate is invoked after components are updated occuring immediately. Its not used initailly upon mounting but is called when operating on the dom and components are updated.

3. They are components that take a function and return another or new component. It transforms a component into another component. They're pure functions with zero side effects lending themselves to the nature of state within react.

4.  Css Style sheets/classnames The benefits of style sheets/classnames is the speeration and organization of ones styles. EVerything is kept in a seperate file. Each component theoretically would have its own style sheet and make it easier to update styles in the future
    
    Inline styling is useful for higher precdence and quick changes of components and dom elements. It has the highest precedence and shows exactly what is being rendered all in one place

    Styled components allows us to use component level styles in our applications. It allows us to write css in the traditional way within a seperated component, contrast this with something like React-Bootstrap and regualur inline rendering with react its much easier in my opinion since we have continuity and continuation of previous use cases. 
    