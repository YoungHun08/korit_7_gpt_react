import Hello from "./Hello/Hello";
import Hello2 from "./Hello2/Hello2";
import Hello3 from "./Hello3/Hello3";
import Hello4 from "./Hello4/Hello4";
import DataListlayout from "./props/DataListLayout/DataListLayout";
import DataListLayout2 from "./props/DataListLayout2/DataListLayout2";
import Textinput from "./props/TextInput/TextInput";

function App() {

    return (
        <>
            <Hello />
            <Hello2 />
            <Hello3 />
            <Hello4 />
            <Textinput id="name" text="이름" />
            <Textinput id="age" text="나이" />
            <Textinput id="address" text="주소" />
            <Textinput id="gender" text="성별" />
            <DataListlayout>
                <li>1번리스트</li>
                <li>2번리스트</li>
                <li>3번리스트</li>
                <li>4번리스트</li>
                <li>5번리스트</li>
            </DataListlayout>
            <DataListLayout2 dataList = { [ 1, 2, 3, 4, 5 ] } />
        </>
    )
}

export default App;