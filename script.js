export default function format(text) {
    return text
        .replace(/\^([0-9]*[-+]+)/g, '<sup>$1</sup>')
        
        .replace(/_([0-9]+)/g, '<sub>$1</sub>')
        
        .replace(/([a-zA-Z0-9>)]+)([-+]+)(?=\s|$)/g, '$1<sup>$2</sup>');
} // used help from AI
