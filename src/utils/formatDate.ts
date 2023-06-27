const formatDate = (date: Date) => {
    // 일, 월, 년 추출
    const yyyy = date.getFullYear();
    const MM = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');

    // 시, 분 추출
    const HH = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');

    return `${yyyy}-${MM}-${dd} ${HH}:${mm}`;
};

export default formatDate;