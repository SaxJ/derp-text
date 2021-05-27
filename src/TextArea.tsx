import { createState } from "solid-js";

function TextArea() {
    const [data, setData] = createState({ value: '' });

    const textAreaChanged = (evt: Event) => {
        const el: HTMLTextAreaElement = evt.target as HTMLTextAreaElement;
        const chars = [...el.value ?? ''];
        const mixed = chars.map((c) => {
            const r = Math.random();
            return r > 0.5 ? c.toUpperCase() : c.toLowerCase();
        })
        setData({ value: mixed.join('') });
    }

    return (
        <div class="converter">
            <textarea onInput={textAreaChanged} />
            <h1 class="arrow">↓</h1>
            <p class="output">{data.value}</p>
        </div>
    );
}

export default TextArea;
