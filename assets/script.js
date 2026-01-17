// 1. THE "DATABASE"
// Add as many laptops as you want here.
const laptopData = [
    {
        id: "l1",
        name: "Acer Nitro 5",
        priceRange: "low", // matches your button values
        category: "gaming", // matches your button values
        os: "windows",
        portability: "low",
        link: "https://www.amazon.in/Acer-AN515-58-57Y8-i5-12500H-GeForce-Keyboard/dp/B0BSLWGFXD", 
        image: "assets/images/acer-nitro.jpg",
        specs: { cpu: "i5-12500H", gpu: "RTX 4050", ram: "16GB", screen: "144Hz FHD" },
        fact: "The best value-for-money gaming laptop on the market right now."
    },
    {
        id: "l2",
        name: "ASUS ROG Zephyrus G14",
        priceRange: "mid",
        category: "gaming",
        os: "windows",
        portability: "medium",
        link: "https://www.flipkart.com/asus-rog-zephyrus-g14-oled-amd-ryzen-9-octa-core-8945hs-16-gb-1-tb-ssd-windows-11-home-8-gb-graphics-nvidia-geforce-rtx-4060-90-w-ga403uv-qs085ws-ga403uv-qs086ws-gaming-laptop/p/itm83e2cad928774?subid=695f72f6683bf9564abd5367&pid=COMHFAHDZWK5BFHE",
        image: "assets/images/asus-rog-zephryus-G14.jpg",
        specs: { cpu: "Ryzen 9", gpu: "RTX 4060", ram: "16GB", screen: "14-inch QHD" },
        fact: "Unbeatable combination of portability and gaming power."
    },
    {
        id: "l3",
        name: "Razer Blade 16",
        priceRange: "high",
        category: "gaming",
        os: "windows",
        portability: "medium",
        link: "https://www.ubuy.co.in/product/IJ6LROMQI-razer-blade-16-16-0-240-hz-oled-intel-core-i9-14th-gen-14900hx-2-20ghz-nvidia-geforce-rtx-4090-laptop-gpu-32-gb-ddr5-2-tb-pcie-ssd?srsltid=AfmBOooJYAUT4vgo4p4GxSyw90p1GvIGYOzW_qV5SyT-678aqt-GN0NL",
        image: "assets/images/razer-blade-16.jpg",
        specs: { cpu: "i9-13950HX", gpu: "RTX 4080", ram: "32GB", screen: "240Hz OLED" },
        fact: "Premium build quality that rivals a MacBook, but for gamers."
    },
    {
        id: "l4",
        name: "MacBook Air M2",
        priceRange: "mid",
        category: ["student","business","creative"], 
        os: "mac",
        portability: "high",
        link: "https://www.amazon.in/2022-Apple-MacBook-Laptop-chip/dp/B0B3BMKMGP",
        image: "assets/images/mac-air-M2.jpg",
        specs: { cpu: "Apple M2", gpu: "8-Core", ram: "8GB/16GB", screen: "Liquid Retina" },
        fact: "Silent (fanless) design and battery that actually lasts all day."
    },
    {
        id: "l5",
        name: "Lenovo ThinkPad X1 Carbon",
        priceRange: "high",
        category: "business",
        os: "windows",
        portability: "high",
        link: "https://www.lenovo.com/in/en/p/laptops/thinkpad/thinkpadx1/thinkpad-x1-carbon-(6th-gen)/22tp2txx16g?orgRef=https%253A%252F%252Fwww.google.com%252F&srsltid=AfmBOoq7d8PJgwQ_PIe-W-8iTfiDf2Z2H2WmXDjSA7dLxwSsJL3643yp#",
        image: "assets/images/lenovo-thinkpad-x1.jpg",
        specs: { cpu: "Core i7 vPro", gpu: "Iris Xe", ram: "16GB", screen: "Antiglare IPS" },
        fact: "Legendary keyboard durability and military-grade toughness."
    },
    {
        id: "l6",
        name: "Dell XPS 15",
        priceRange: "high",
        category: "creative",
        os: "windows",
        portability: "medium",
        link: "https://www.dell.com/en-in/shop/laptop-notebook-computers/xps-15-laptop/spd/xps-15-9530-laptop",
        image: "assets/images/dell-xps-15.jpg",
        specs: { cpu: "Core i9", gpu: "RTX 4050", ram: "32GB", screen: "3.5K OLED" },
        fact: "The OLED screen offers true blacks, essential for color grading."
    },
    {
        id: "l7",
        name: "Acer Swift Go 14",
        priceRange: "low",
        category: "student", 
        os: "windows",
        portability: "high",
        link: "https://www.amazon.in/Acer-Premium-Hexa-Core-Processor-SFG14-41/dp/B0BTT7FV2S?th=1",
        image: "assets/images/acer-go-14.jpg",
        specs: { cpu: "Core i5", gpu: "Iris Xe", ram: "8GB", screen: "OLED" },
        fact: "One of the cheapest ways to get a stunning OLED screen."
    },
    {
        id: "l8",
        name: "MacBook Pro 14",
        priceRange: "high",
        category: ["student","business","creative"],
        os: "mac",
        portability: "medium",
        link: "https://www.vijaysales.com/p/P235491/235494/apple-macbook-pro-m4-chip-16gb-ram-1tb-ssd-14-2-inch-35-97-cm-liquid-retina-xdr-display-10-core-cpu-10-core-gpu-macos-space-black?utm_source=google&utm_medium=cpc&utm_campaign=pt-google-vijaysales-apple-pmax-purchase-shopping-macbook-na-in-all-12-09-2022&gad_source=1&gad_campaignid=17952322759&gbraid=0AAAAADLKtlk-g_NhV1oxdLtnp5_Ep4ATS&gclid=Cj0KCQiA1JLLBhCDARIsAAVfy7iiB7eYec1v-dt9kvk26fx7rk3I0XzgmbMbJcMmPlQwHbqFJrTt7EUaAqcoEALw_wcB",
        image: "assets/images/mac-pro-14.jpg",
        specs: { cpu: "M3 Pro", gpu: "14-Core", ram: "18GB", screen: "XDR Promotion" },
        fact: "Best-in-class speakers and microphone for professionals."
    },
    {
        id: "l9",
        name: "HP Chromebook x360",
        priceRange: "low",
        category: "student",
        os: "chrome",
        portability: "high",
        link: "https://www.amazon.in/HP-Chromebook-Micro-Edge-Touchscreen-14a-ca0506TU/dp/B09QQPGDBG",
        image: "assets/images/hp-360.jpg",
        specs: { cpu: "Pentium Silver", gpu: "Integrated", ram: "4GB/8GB", screen: "Touch HD" },
        fact: "Runs ChromeOS, which is virus-free, boots in seconds, and is perfect for Google Docs."
    },
    {
        id: "l10",
        name: "Lenovo Legion 5i Gen 8",
        priceRange: "mid",
        category: "gaming",
        os: "windows",
        portability: "low", // It's heavy
        link: "https://www.amazon.in/Lenovo-Legion-Gaming-i7-13700HX-GeForce/dp/B0CYHC8Q3T",
        image: "assets/images/lenovo-51.jpg",
        specs: { cpu: "i7-13700HX", gpu: "RTX 4060", ram: "16GB", screen: "165Hz IPS" },
        fact: "Widely considered the best cooling system in the mid-range gaming market."
    },
    {
        id: "l11",
        name: "Dell Inspiron 15",
        priceRange: "low",
        category: "business", 
        os: "windows",
        portability: "medium",
        link: "https://www.dell.com/en-in/shop/laptop-notebook-computers/inspiron-15-laptop/spd/inspiron-15-3530-laptop",
        image: "assets/images/dell-inspiron-15.jpg",
        specs: { cpu: "Core i5-1235U", gpu: "Iris Xe", ram: "12GB/16GB", screen: "FHD Touch" },
        fact: "A classic reliable workhorse. Parts are easy to find and repair."
    },
    {
        id: "l12",
        name: "MacBook Air M1",
        priceRange: "mid", 
        category: ["student","business","creative"],
        os: "mac",
        portability: "high",
        link: "https://www.amazon.in/Apple-MacBook-Chip-13-inch-256GB/dp/B08N5W4NNB?th=1",
        image: "assets/images/mac-air-m1.jpg",
        specs: { cpu: "Apple M1", gpu: "7-Core", ram: "8GB", screen: "Retina Display" },
        fact: "Despite being a few years old, it is still faster than most Windows laptops twice its price."
    },
    {
        id: "l13",
        name: "HP Pavilion Plus 14",
        priceRange: "mid",
        category: "creative",
        os: "windows",
        portability: "high",
        link: "https://www.hp.com/emea_middle_east-en/products/laptops/product-details/2102305106",
        image: "assets/images/hp-plus-14.jpg",
        specs: { cpu: "i7-1355U", gpu: "Integrated", ram: "16GB", screen: "2.8K OLED" },
        fact: "An affordable way to get an OLED screen, which makes colors pop for photo editing."
    },
    {
        id: "l14",
        name: "Microsoft Surface Laptop 5",
        priceRange: "high",
        category: "business",
        os: "windows",
        portability: "high",
        link: "https://www.amazon.in/Microsoft-Surface-Laptop-Touch-Screen/dp/B0B8QDQG5G",
        image: "assets/images/microsoft-surface-5.jpg",
        specs: { cpu: "i7-1255U", gpu: "Iris Xe", ram: "16GB", screen: "PixelSense Touch" },
        fact: "Features a 3:2 aspect ratio screen, which gives you more vertical space for reading documents."
    },
    {
        id: "l15",
        name: "MSI Katana 15",
        priceRange: "low", // Often on sale
        category: "gaming",
        os: "windows",
        portability: "medium",
        link: "https://www.amazon.in/MSI-i9-13900H-Windows-GeForce-B13VFK-843IN/dp/B0C6F2QJYP?th=1",
        image: "assets/images/msi-katana-15.jpg",
        specs: { cpu: "i7-13620H", gpu: "RTX 4050", ram: "16GB", screen: "144Hz" },
        fact: "Known for having a distinct 'gamer' aesthetic and high performance per dollar."
    },
    {
        id: "l16",
        name: "HP Victus 15",
        priceRange: "low",
        category: "gaming",
        os: "windows",
        portability: "medium",
        link: "https://www.hp.com/in-en/shop/hp-victus-gaming-laptop-15-fb3134ax-bv3a8pa.html?jumpid=cs_in_go_st_mc_cm018701_cv_px_cps&utm_source=google&utm_medium=cpc&utm_campaign=IN_CPS-bu_PMAX_NoA_lapt_Acq_Google-s_OPEX_ENG_CM018701_NoKey_AllDev_incbn_Pmax-CPS-Top-SKUs&gclsrc=aw.ds&gad_source=1&gad_campaignid=22190404709&gbraid=0AAAAACY0IB3vK6n199zqJQTnZezezkjAz&gclid=Cj0KCQiA1JLLBhCDARIsAAVfy7gruW8YlcjpRajgUDQgExpp-npLSBa1h6L5EWvfXUpQdHJCpN2nuNQaAmh1EALw_wcB",
        image: "assets/images/hp-victus-15.jpg",
        specs: { cpu: "i5-12450H", gpu: "GTX 1650 / RTX 3050", ram: "8GB", screen: "144Hz FHD" },
        fact: "A more subtle design than most gaming laptops, so it fits into a classroom or office easily."
    },
    {
        id: "l17",
        name: "LG Gram 17",
        priceRange: "high",
        category: "business",
        os: "windows",
        portability: "high",
        link: "https://www.amazon.in/LG-Gram-Intel-Light-Laptop/dp/B08J3D2YHV",
        image: "assets/images/lg-17.jpg",
        specs: { cpu: "Core i7 Evo", weight: "1.35 kg", screen: "17-inch IPS", battery: "17 Hours" },
        fact: "It holds the world record for the lightest 17-inch laptop. It feels impossibly light."
    },
    {
        id: "l18",
        name: "Microsoft Surface Pro 9",
        priceRange: "mid",
        category: ["student","creative"], // Also fits creative
        os: "windows",
        portability: "high",
        link: "https://www.amazon.in/Microsoft-Surface-Platinum-Ultimate-Bluetooth/dp/B0BLYWYKZ5",
        image: "assets/images/microsoft-surface-pro-9.png",
        specs: { cpu: "Core i5/i7", type: "Tablet PC", ram: "8GB/16GB", screen: "PixelSense Flow" },
        fact: "The keyboard detaches completely, turning it into a powerful Windows tablet for drawing."
    },
    {
        id: "l19",
        name: "Dell G15 Gaming",
        priceRange: "mid",
        category: "gaming",
        os: "windows",
        portability: "low",
        link: "https://www.amazon.in/Dell-G15-5511-Gaming-Laptop/dp/B096R2NRNJ",
        image: "assets/images/dell-g15.jpg",
        specs: { cpu: "Ryzen 7", gpu: "RTX 4060", ram: "16GB", screen: "165Hz" },
        fact: "Shares the same thermal engineering DNA as Dell's premium Alienware brand."
    },
    {
        id: "l20",
        name: "Samsung Galaxy Book3 Pro",
        priceRange: "high",
        category: "business",
        os: "windows",
        portability: "high",
        link: "https://www.amazon.in/Samsung-40-62cm-Touchscreen-Graphite-NP960QFG-KA1IN/dp/B0BS9GCYRN?th=1",
        image: "assets/images/samsung-book3.jpg",
        specs: { cpu: "Core i7", screen: "3K AMOLED", ram: "16GB", ecosystem: "Samsung" },
        fact: "If you have a Samsung phone/tablet, this laptop connects to them seamlessly like Apple's ecosystem."
    },
    {
        id: "l21",
        name: "Lenovo Chromebook Duet 5",
        priceRange: "low",
        category: "student",
        os: "chrome",
        portability: "high",
        link: "https://www.amazon.in/Lenovo-Chromebook-Qualcomm-Snapdragon-Keyboard/dp/B0F13DTDD3",
        image: "assets/images/lenovo-due5.jpg",
        specs: { cpu: "Snapdragon", screen: "OLED Touch", battery: "15 Hours", type: "Detachable" },
        fact: "Uses an OLED screen (usually very expensive) on a budget device. Great for movies."
    },
    {
        id: "l22",
        name: "MSI Raider GE78",
        priceRange: "high",
        category: "gaming",
        os: "windows",
        portability: "low",
        link: "https://www.amazon.in/MSI-i9-14900HX-43-18CM-Windows-14VIG-804IN/dp/B0D1FSGSSD",
        image: "assets/images/msi-ge78.jpg",
        specs: { cpu: "i9-13980HX", gpu: "RTX 4090", ram: "64GB", screen: "240Hz QHD" },
        fact: "Features a massive RGB light bar on the front. This is a true desktop replacement."
    },
    {
        id: "l23",
        name: "Gigabyte AERO 16 OLED",
        priceRange: "mid",
        category: "creative",
        os: "windows",
        portability: "medium",
        link: "https://www.amazon.in/GIGABYTE-i7-12700H-Graphics-Creator-Windows/dp/B0B7NT48VB",
        image: "assets/images/gigabyte-16.jpg",
        specs: { cpu: "i7-13700H", gpu: "RTX 4070", screen: "4K OLED", color: "Pantone Validated" },
        fact: "Factory calibrated color accuracy ensures what you see on screen is exactly what prints."
    },
    {
        id: "l24",
        name: "Framework Laptop 13",
        priceRange: "mid",
        category: "student", // Good for tech-savvy students
        os: "windows",
        portability: "high",
        link: "https://frame.work/laptop13",
        image: "assets/images/framework-13",
        specs: { cpu: "Ryzen 7 / i7", repair: "10/10", ram: "Up to 64GB", ports: "Modular" },
        fact: "You can choose your own ports (USB-C, HDMI, etc.) and swap them out whenever you want."
    },
    {
        id: "l25",
        name: "HP Envy x360",
        priceRange: "mid",
        category: "student",
        os: "windows",
        portability: "medium",
        link: "https://www.amazon.in/HP-2-1-Touch-Screen-Nightfall/dp/B08BJGMFZH",
        image: "assets/images/hp-envy-x360.jpg",
        specs: { cpu: "Ryzen 7", type: "2-in-1", chassis: "Aluminum", screen: "Touch" },
        fact: "A premium metal build that feels much more expensive than it actually is."
    },
    {
        id: "l26",
        name: "ASUS Vivobook 16X",
        priceRange: "low",
        category: "creative", // Budget creative option
        os: "windows",
        portability: "medium",
        link: "amazon.in/dp/B0DDQ6HFR8?ascsubtag=695f72f6683bf9564abd5367&tag=52421_iceleadscom0d-21&linkCode=osi&th=1&psc=1",
        image: "assets/images/asus-vivobook-16x",
        specs: { cpu: "Ryzen 5/7", gpu: "RTX 3050/4050", screen: "16-inch 120Hz", ram: "16GB" },
        fact: "Brings dedicated graphics cards (essential for video editing) to the budget market."
    },
    {
        id: "l27",
        name: "Alienware m18",
        priceRange: "high",
        category: "gaming",
        os: "windows",
        portability: "low",
        link: "https://www.dell.com/en-in/shop/gaming-and-games/alienware-m18-r2-gaming-laptop/spd/alienware-m18-r2-laptop",
        image: "assets/images/alienware-m18.jpg",
        specs: { cpu: "i9-13900HX", gpu: "RTX 4090", screen: "18-inch", weight: "4.0 kg" },
        fact: "An absolute beast with an 18-inch screen. Do not plan on carrying this around often."
    }
    
];



/***********************
 * 2. APP STATE
 ***********************/
let userAnswers = {};

/***********************
 * 3. NAVIGATION LOGIC
 ***********************/
function nextStep(stepNumber) {
    hideAllSteps();
    document.getElementById(`step-${stepNumber}`).classList.add('active');
}

function prevStep(stepNumber) {
    hideAllSteps();
    if (stepNumber === 0) {
        document.getElementById('start-screen').classList.add('active');
    } else {
        document.getElementById(`step-${stepNumber}`).classList.add('active');
    }
}

function selectOption(category, value, nextStepId) {
    userAnswers[category] = value;
    if (nextStepId === 'result') {
        showResult();
    } else {
        nextStep(nextStepId);
    }
}

function hideAllSteps() {
    document.querySelectorAll('.step')
        .forEach(step => step.classList.remove('active'));
}

function restartTool() {
    userAnswers = {};
    hideAllSteps();
    document.getElementById('start-screen').classList.add('active');
}

function toggleLearnMore(id) {
    const content = document.getElementById(id);
    content.style.display = content.style.display === "block" ? "none" : "block";
}

/***********************
 * 4. WEIGHT CONFIG
 ***********************/
const WEIGHTS = {
    category: 40,
    os: 25,
    budget: 25,
    portability: 10
};

/***********************
 * 5. SCORING HELPERS
 ***********************/
function getBudgetScore(laptopPrice, userBudget) {
    if (laptopPrice === userBudget) return 100;
    if (userBudget === 'high' && laptopPrice === 'mid') return 60;
    if (userBudget === 'mid' && laptopPrice === 'low') return 60;
    if (userBudget === 'low' && laptopPrice === 'mid') return 30;
    return 0;
}

function getPortabilityScore(laptopPortability, userPortability) {
    if (!userPortability) return 50;
    if (laptopPortability === userPortability) return 100;
    if (
        (laptopPortability === 'medium' && userPortability === 'high') ||
        (laptopPortability === 'high' && userPortability === 'medium')
    ) return 60;
    return 20;
}

function calculateScore(laptop) {
    let score = 0;

    // Category (mandatory match already filtered)
    score += WEIGHTS.category;

    // OS (mandatory match already filtered)
    score += WEIGHTS.os;

    // Budget
    score += (getBudgetScore(laptop.priceRange, userAnswers.budget) / 100)
        * WEIGHTS.budget;

    // Portability (soft preference)
    score += (getPortabilityScore(laptop.portability, userAnswers.portability) / 100)
        * WEIGHTS.portability;

    return Math.round(score);
}

/***********************
 * 6. RESULT ENGINE
 ***********************/
function showResult() {
    hideAllSteps();
    document.getElementById('result-screen').classList.add('active');

    const resultContainer = document.getElementById('recommendation-content');
    resultContainer.innerHTML = '';

    /* 1. FILTER BY USE CASE */
    let pool = laptopData.filter(
    laptop => laptop.category.includes(userAnswers.use)
    );

    /* 2. STRICT OS FILTER */
    if (userAnswers.os !== 'any') {
        pool = pool.filter(
            laptop => laptop.os === userAnswers.os
        );
    }

    /* 3. EMPTY STATE */
    if (pool.length === 0) {
        resultContainer.innerHTML = `
            <div class="no-results">
                <h3>No matching laptops found</h3>
                <p>
                    Try changing your OS, budget, or use-case selection.
                </p>
                <button onclick="restartTool()" class="buy-btn">
                    Start Over
                </button>
            </div>
        `;
        return;
    }

    /* 4. SCORE + SORT */
    pool = pool
        .map(laptop => ({
            ...laptop,
            score: calculateScore(laptop)
        }))
        .sort((a, b) => b.score - a.score);

    /* 5. PICK DISTINCT RESULTS */
    const pick1 = pool[0];
    const pick2 = pool.find(l => l.id !== pick1.id);

    let html = generateCard(pick1, '1', 'Top Recommendation');

    if (pick2) {
        html += generateCard(pick2, '2', 'Alternative Choice');
    }

    resultContainer.innerHTML = html;
}

/***********************
 * 7. CARD RENDERING
 ***********************/
function generateCard(pick, idSuffix, badge) {
    return `
        <div class="bento-box ${idSuffix === '1' ? 'primary' : 'secondary'}">
            <h4>${badge}</h4>

            <div class="img-container">
                <img src="${pick.image || ''}" 
                     alt="${pick.name}" 
                     class="laptop-img">
            </div>

            <h3>${pick.name}</h3>
            <div class="desc-text">
                Perfect for ${userAnswers.use}
            </div>

            <div class="score-badge">
                Match Score: ${pick.score}%
            </div>

            <div class="action-buttons">
                <a href="${pick.link}" 
                   target="_blank" 
                   class="buy-btn">
                   Check Price ↗
                </a>
                <button class="learn-more-btn"
                        onclick="toggleLearnMore('details-${idSuffix}')">
                    Learn More ▾
                </button>
            </div>

            <div id="details-${idSuffix}" class="details-content">
                <table class="specs-table">
                    ${Object.entries(pick.specs).map(([k, v]) => `
                        <tr>
                            <td>${k.toUpperCase()}</td>
                            <td>${v}</td>
                        </tr>
                    `).join('')}
                </table>
                <div class="fact-box">
                    <strong>Expert Note:</strong><br>
                    ${pick.fact}
                </div>
            </div>
        </div>
    `;

}
