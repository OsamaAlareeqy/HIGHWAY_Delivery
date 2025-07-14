
const saltAreas = [
 {name: "ضاحية الزهور", price: "1.50", time: "10-15 دقيقة"},
            {name: "دبابنه", price: "1.50", time: "10-15 دقيقة"},
            {name: "بركة العامرية", price: "1.50", time: "10-15 دقيقة"},
            {name: "نقب الدبور العلوي", price: "2.00", time: "15-20 دقيقة"},
            {name: "نقب الدبور السفلي", price: "2.50", time: "15-20 دقيقة"},
            {name: "الدفاع المدني", price: "2.00", time: "15-20 دقيقة"},
            {name: "البقعان", price: "2.00", time: "15-20 دقيقة"},
            {name: "إسكان المهندسين", price: "2.00", time: "15-20 دقيقة"},
            {name: "البحيرة", price: "2.00", time: "15-20 دقيقة"},
            {name: "دوار الصوارفه", price: "2.00", time: "15-20 دقيقة"},
            {name: "طلوع الخشامين السلالم", price: "2.00", time: "15-20 دقيقة"},
            {name: "السلالم حي عصفور", price: "2.00", time: "15-20 دقيقة"},
            {name: "جسر السلالم", price: "2.00", time: "15-20 دقيقة"},
            {name: "وادي الشجرة", price: "2.00", time: "15-20 دقيقة"},
            {name: "وسط البلد", price: "2.50", time: "20-25 دقيقة"},
            {name: "الميدان", price: "2.50", time: "20-25 دقيقة"},
            {name: "شارع الخضر", price: "2.50", time: "20-25 دقيقة"},
            {name: "ام عطيه", price: "2.50", time: "20-25 دقيقة"},
            {name: "الخندق", price: "2.50", time: "20-25 دقيقة"},
            {name: "الصوانيه", price: "2.50", time: "20-25 دقيقة"},
            {name: "وادي الأكراد", price: "2.50", time: "20-25 دقيقة"},
            {name: "العيزريه", price: "2.50", time: "20-25 دقيقة"},
            {name: "وادي الريح", price: "2.50", time: "20-25 دقيقة"},
            {name: "الصافح", price: "2.50", time: "20-25 دقيقة"},
            {name: "ابو القيقب", price: "2.50", time: "20-25 دقيقة"},
            {name: "المدينة الرياضية", price: "2.50", time: "20-25 دقيقة"},
            {name: "شارع الستين", price: "2.50", time: "20-25 دقيقة"},
            {name: "جسر المغاريب", price: "3.00", time: "25-30 دقيقة"},
            {name: "المغاريب", price: "3.00", time: "25-30 دقيقة"},
            {name: "البقيع", price: "2.50", time: "20-25 دقيقة"},
            {name: "إسكان الفردوس", price: "3.00", time: "25-30 دقيقة"},
            {name: "ابو الردا", price: "3.00", time: "25-30 دقيقة"},
            {name: "ام الزيتونة", price: "3.50", time: "30-35 دقيقة"},
            {name: "الطرازين", price: "3.50", time: "30-35 دقيقة"},
            {name: "القسام", price: "3.00", time: "25-30 دقيقة"},
            {name: "بطنا", price: "3.50", time: "30-35 دقيقة"},
            {name: "عيرا", price: "5.00", time: "40-45 دقيقة"},
            {name: "يرقا", price: "5.00", time: "40-45 دقيقة"},
            {name: "مدرسة السلط الثانوية", price: "2.50", time: "20-25 دقيقة"},
            {name: "المنشية", price: "2.50", time: "20-25 دقيقة"},
            {name: "الميامين", price: "3.00", time: "25-30 دقيقة"},
            {name: "جسر المناصير", price: "2.50", time: "20-25 دقيقة"},
            {name: "طباعة العوامله", price: "2.50", time: "20-25 دقيقة"},
            {name: "زي", price: "3.00", time: "25-30 دقيقة"},
            {name: "علان", price: "3.50", time: "30-35 دقيقة"},
            {name: "ام جوزة", price: "3.00", time: "25-30 دقيقة"},
            {name: "الرميمين", price: "5.00", time: "40-45 دقيقة"},
            {name: "كفر هودا", price: "3.50", time: "30-35 دقيقة"},
            {name: "الصبيحي", price: "5.00", time: "40-45 دقيقة"},
            {name: "ام العمد", price: "4.00", time: "35-40 دقيقة"},
            {name: "الزعتري", price: "2.00", time: "15-20 دقيقة"},
            {name: "اليزيديه", price: "1.50", time: "10-15 دقيقة"},
            {name: "المضري", price: "2.50", time: "20-25 دقيقة"},
            {name: "دعم الغزالات", price: "3.00", time: "25-30 دقيقة"},
            {name: "سلعوف", price: "3.50", time: "30-35 دقيقة"},
            {name: "الويسيه", price: "3.00", time: "25-30 دقيقة"},
            {name: "جلعد", price: "5.00", time: "40-45 دقيقة"},
            {name: "الميسه", price: "2.00", time: "15-20 دقيقة"},
            {name: "حدائق ابو حسان", price: "3.00", time: "25-30 دقيقة"},
            {name: "وادي السلط", price: "3.00", time: "25-30 دقيقة"},
            {name: "وادي الشعيب التنقيه", price: "3.50", time: "30-35 دقيقة"},
            {name: "وادي الشعيب الفحيص", price: "4.00", time: "35-40 دقيقة"},
            {name: "وادي الشعيب المقام", price: "5.00", time: "40-45 دقيقة"},
            {name: "وادي الشعيب الكنايات", price: "5.00", time: "40-45 دقيقة"},
            {name: "ترخيص السلط", price: "1.00", time: "5-10 دقيقة"},
            {name: "جامعة عمان الأهلية", price: "1.00", time: "5-10 دقيقة"},
            {name: "السرو الجنوبي", price: "1.50", time: "10-15 دقيقة"},
            {name: "السرو الجمارك", price: "1.50", time: "10-15 دقيقة"},
            {name: "السرو إسكان طيبه", price: "1.50", time: "10-15 دقيقة"},
            {name: "السرو إسكان آسيا", price: "2.00", time: "15-20 دقيقة"},
            {name: "السرو حي السميرات", price: "2.00", time: "15-20 دقيقة"},
            {name: "السرو الفروسية", price: "2.00", time: "15-20 دقيقة"},
            {name: "السرو الجيعه", price: "2.00", time: "15-20 دقيقة"},
            {name: "ام نعاج", price: "2.00", time: "15-20 دقيقة"},
            {name: "دوار الكمالية الحمر", price: "2.50", time: "20-25 دقيقة"},
            {name: "الفحيص", price: "3.00", time: "25-30 دقيقة"},
            {name: "ماحص", price: "3.50", time: "30-35 دقيقة"},
            {name: "دوار صويلح", price: "3.50", time: "30-35 دقيقة"},
            {name: "عين الباشا", price: "3.00", time: "25-30 دقيقة"},
            {name: "جامعة البقاء", price: "3.00", time: "25-30 دقيقة"}
];

const ammanAreas = [
            {name: "جبيهه", price: "4.00 د.أ", time: "30-40 دقيقة"},
            {name: "ابو نصير", price: "5.00 د.أ", time: "35-45 دقيقة"},
            {name: "شارع الأردن", price: "5.50 د.أ", time: "40-50 دقيقة"},
            {name: "شارع الجامعة", price: "4.00 د.أ", time: "30-40 دقيقة"},
            {name: "دوار الواحة", price: "5.00 د.أ", time: "35-45 دقيقة"},
            {name: "دابوق", price: "3.50 د.أ", time: "25-35 دقيقة"},
            {name: "خلدا", price: "4.00 د.أ", time: "30-40 دقيقة"},
            {name: "الجاردنز", price: "5.00 د.أ", time: "35-45 دقيقة"},
            {name: "دوار الداخلية", price: "6.00 د.أ", time: "45-55 دقيقة"},
            {name: "الثامن", price: "5.00 د.أ", time: "35-45 دقيقة"},
            {name: "السابع", price: "5.00 د.أ", time: "35-45 دقيقة"},
            {name: "السادس", price: "5.00 د.أ", time: "35-45 دقيقة"},
            {name: "تلاع العلي", price: "5.00 د.أ", time: "35-45 دقيقة"}
];

document.addEventListener('DOMContentLoaded', function () {
    renderPricingCards('salt', saltAreas);
    renderPricingCards('amman', ammanAreas);

    document.getElementById('saltSearch').addEventListener('input', function (e) {
        filterAreas('salt', saltAreas, e.target.value);
    });

    document.getElementById('ammanSearch').addEventListener('input', function (e) {
        filterAreas('amman', ammanAreas, e.target.value);
    });
});

function showPricing(city) {
    document.getElementById('citySelection').style.display = 'none';
    document.getElementById(`${city}Pricing`).style.display = 'block';
}

function goBack() {
    document.getElementById('saltPricing').style.display = 'none';
    document.getElementById('ammanPricing').style.display = 'none';
    document.getElementById('citySelection').style.display = 'block';
}

function renderPricingCards(city, areas) {
    const container = document.querySelector(`#${city}Pricing .pricing-grid`);
    container.innerHTML = '';

    areas.forEach(area => {
        const card = document.createElement('div');
        card.className = 'pricing-card';
        card.innerHTML = `
            <div class="area-name">${area.name}</div>
            <span class="price">${area.price}</span>
            <span class="estimated-time">${area.time}</span>
        `;
        container.appendChild(card);
    });
}

function filterAreas(city, areas, searchTerm) {
    const filtered = areas.filter(area =>
        area.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderPricingCards(city, filtered);
}
