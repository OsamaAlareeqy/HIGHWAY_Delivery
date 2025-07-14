
// بيانات مناطق السلط
const saltAreas = [
    {name: "ضاحية الزهور", price: "1.50 د.أ", time: "10-15 دقيقة"},
    {name: "وسط البلد", price: "2.50 د.أ", time: "20-25 دقيقة"},
    {name: "زي", price: "3.00 د.أ", time: "25-30 دقيقة"}
    // يمكنك إضافة باقي البيانات هنا...
];

// بيانات مناطق عمان
const ammanAreas = [
    {name: "جبيهه", price: "4.00 د.أ", time: "30-40 دقيقة"},
    {name: "ابو نصير", price: "5.00 د.أ", time: "35-45 دقيقة"},
    {name: "خلدا", price: "4.00 د.أ", time: "30-40 دقيقة"}
    // يمكنك إضافة باقي البيانات هنا...
];

// تهيئة الصفحة
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

// عرض قائمة الأسعار
function showPricing(city) {
    document.getElementById('citySelection').style.display = 'none';
    document.getElementById(`${city}Pricing`).style.display = 'block';
}

// العودة للقائمة الرئيسية
function goBack() {
    document.getElementById('saltPricing').style.display = 'none';
    document.getElementById('ammanPricing').style.display = 'none';
    document.getElementById('citySelection').style.display = 'block';
}

// إنشاء البطاقات بناءً على المناطق
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

// فلترة المناطق حسب البحث
function filterAreas(city, areas, searchTerm) {
    const filtered = areas.filter(area =>
        area.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderPricingCards(city, filtered);
}
