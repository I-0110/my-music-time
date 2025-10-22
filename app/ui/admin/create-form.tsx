'use client';

import { useState } from 'react';

export default function AddVideoForm() {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [month, setMonth] = useState<string[]>([]);
    const [cat, setCat] = useState<string[]>([]);
    const [grade, setGrade] = useState<string[]>([]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        await fetch("/api/videos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                title, 
                url, 
                month, 
                cat, 
                grade,
            }),
        });

        setTitle("");
        setUrl("");
        setMonth([]);
        setCat([]);
        setGrade([]);
    }

    function handleMultiSelect(
        setter: React.Dispatch<React.SetStateAction<string[]>>
    ) {
        return (e: React.ChangeEvent<HTMLSelectElement>) => {
            const selected = Array.from(e.target.selectedOptions).map(
                (option) => option.value
            );
            setter(selected);
        };
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                placeholder='Video title' 
            />
            <input 
                value={url} 
                onChange={e => setUrl(e.target.value)} 
                placeholder='Video URL' 
            />

            <label>Months (hold Ctrl or Cmd to select multiple)</label>
            <select multiple value={month} onChange={handleMultiSelect(setMonth)}>
                {[
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ].map((month) => (
                    <option key={month} value={month}>
                        {month}
                    </option>
                ))}
            </select>

            <label>Categories</label>
            <select multiple value={cat} onChange={handleMultiSelect(setCat)}>
                {[
                    'Watch',
                    'Rhythm',
                    'Birthday',
                    'Sing'
                ].map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>

            <label>Grade Level</label>
            <select multiple value={grade} onChange={handleMultiSelect(setGrade)}>
                {[
                    'GradeK',
                    'Grade1',
                    'Grade2',
                    'Grade3',
                    'Grade4',
                    'Grade5',
                    'GradeMiddle+'
                ].map((grade) => (
                    <option key={grade} value={grade}>
                        {grade}
                    </option>
                ))}
            </select>
            
            <button type="submit">Add Video</button>
        </form>
    );
}