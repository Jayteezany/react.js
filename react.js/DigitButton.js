import { ACTIONS } from "./App"

export default functionDigitButton({dispatch, digit }) {
    return (
        <button 
        onclick={() => dispatch({ type: ACTIONS.ADD_DIGIT, ayload: { digit}})} 
    >

{digit}
</button> 
    )
}