const products = [
    {
        id: 1,
        productName: "Wedding Silk Saree",
        oldPrice: 2000,
        newPrice: 1500,
        img: "saree1.jpg",
        description: "Exquisite silk saree perfect for weddings and special occasions.",
        categories: ["Wedding Silk", "Bridal Collection"]
    },
    {
        id: 2,
        productName: "Benares Silk Saree",
        oldPrice: 1800,
        newPrice: 1200,
        img: "saree1.jpg",
        description: "Traditional Benares silk saree with intricate patterns and designs.",
        categories: ["Benares Silk"]
    },
    {
        id: 3,
        productName: "Raw Silk Dress Material",
        oldPrice: 1500,
        newPrice: 1000,
        img: "saree1.jpg",
        description: "Elegant raw silk dress material suitable for various occasions.",
        categories: ["Raw Silk"]
    },
    {
        id: 4,
        productName: "Mysore Silk Saree",
        oldPrice: 2200,
        newPrice: 1800,
        img: "saree3.jpg",
        description: "Rich Mysore silk saree adorned with traditional motifs.",
        categories: ["Mysore Silk"]
    },
    {
        id: 5,
        productName: "Tussar Silk Saree",
        oldPrice: 2500,
        newPrice: 2000,
        img: "saree2.jpg",
        description: "Luxurious Tussar silk saree known for its texture and sheen.",
        categories: ["Tussar Silk Saree"]
    },
    {
        id: 6,
        productName: "Soft Silk Saree",
        oldPrice: 2800,
        newPrice: 2400,
        img: "soft_silk_saree.jpg",
        description: "Delicate soft silk saree with intricate borders and pallu.",
        categories: ["Soft Silk"]
    },
    {
        id: 7,
        productName: "Muslin Kurti",
        oldPrice: 1200,
        newPrice: 900,
        img: "muslin_kurti.jpg",
        description: "Lightweight and breathable muslin kurti for casual wear.",
        categories: ["Muslin"]
    },
    {
        id: 8,
        productName: "Kanjivaram Silk Saree",
        oldPrice: 3200,
        newPrice: 2700,
        img: "kanjivaram_silk_saree.jpg",
        description: "Classic Kanjivaram silk saree with vibrant colors and intricate designs.",
        categories: ["Kanjivaram Silk"]
    },
    {
        id: 9,
        productName: "Embroidered Chanderi Saree",
        oldPrice: 2000,
        newPrice: 1500,
        img: "embroidered_chanderi_saree.jpg",
        description: "Elegant embroidered Chanderi silk saree for formal occasions.",
        categories: ["Chanderi Silk"]
    },
    {
        id: 10,
        productName: "Banarasi Brocade Lehenga",
        oldPrice: 4000,
        newPrice: 3500,
        img: "banarasi_brocade_lehenga.jpg",
        description: "Opulent Banarasi brocade lehenga with intricate zari work.",
        categories: ["Banarasi Silk", "Bridal Collection"]
    },
    {
        id: 11,
        productName: "Jamdani Saree",
        oldPrice: 2800,
        newPrice: 2400,
        img: "jamdani_saree.jpg",
        description: "Exquisite Jamdani saree handwoven with fine cotton threads.",
        categories: ["Jamdani"]
    },
    {
        id: 12,
        productName: "Chikankari Kurti",
        oldPrice: 1500,
        newPrice: 1200,
        img: "chikankari_kurti.jpg",
        description: "Graceful Chikankari kurti with intricate embroidery.",
        categories: ["Chikankari"]
    },
    {
        id: 13,
        productName: "Kalamkari Dupatta",
        oldPrice: 800,
        newPrice: 600,
        img: "kalamkari_dupatta.jpg",
        description: "Artistic Kalamkari dupatta hand-painted with traditional motifs.",
        categories: ["Kalamkari"]
    },
    {
        id: 14,
        productName: "Pochampally Ikat Saree",
        oldPrice: 2200,
        newPrice: 1800,
        img: "pochampally_ikat_saree.jpg",
        description: "Vibrant Pochampally Ikat saree known for its distinctive patterns.",
        categories: ["Ikat"]
    },
    {
        id: 15,
        productName: "Patola Silk Dupatta",
        oldPrice: 1700,
        newPrice: 1400,
        img: "patola_silk_dupatta.jpg",
        description: "Luxurious Patola silk dupatta with intricate weaving.",
        categories: ["Patola Silk"]
    },
    {
        id: 16,
        productName: "Kota Doria Saree",
        oldPrice: 1200,
        newPrice: 1000,
        img: "kota_doria_saree.jpg",
        description: "Lightweight Kota Doria saree adorned with delicate motifs.",
        categories: ["Kota Doria"]
    },
    {
        id: 17,
        productName: "Bhagalpuri Silk Saree",
        oldPrice: 1500,
        newPrice: 1200,
        img: "bhagalpuri_silk_saree.jpg",
        description: "Silky Bhagalpuri saree known for its texture and elegance.",
        categories: ["Bhagalpuri Silk"]
    },
    {
        id: 18,
        productName: "Bandhani Bandhej Saree",
        oldPrice: 1600,
        newPrice: 1300,
        img: "bandhani_bandhej_saree.jpg",
        description: "Colorful Bandhani Bandhej saree with tie-dye patterns.",
        categories: ["Bandhani"]
    },
    {
        id: 19,
        productName: "Gadwal Silk Saree",
        oldPrice: 2800,
        newPrice: 2400,
        img: "gadwal_silk_saree.jpg",
        description: "Traditional Gadwal silk saree with contrasting borders.",
        categories: ["Gadwal Silk"]
    },
    {
        id: 20,
        productName: "Kantha Stitch Saree",
        oldPrice: 1500,
        newPrice: 1200,
        img: "kantha_stitch_saree.jpg",
        description: "Artistic Kantha stitch saree handcrafted with colorful threadwork.",
        categories: ["Kantha Stitch"]
    },
    {
        id: 21,
        productName: "Tant Cotton Saree",
        oldPrice: 1000,
        newPrice: 800,
        img: "tant_cotton_saree.jpg",
        description: "Traditional Tant cotton saree with simple yet elegant designs.",
        categories: ["Tant Cotton"]
    },
    {
        id: 22,
        productName: "Phulkari Dupatta",
        oldPrice: 1200,
        newPrice: 1000,
        img: "phulkari_dupatta.jpg",
        description: "Colorful Phulkari dupatta embroidered with floral motifs.",
        categories: ["Phulkari"]
    },
    {
        id: 23,
        productName: "Patan Patola Saree",
        oldPrice: 4500,
        newPrice: 4000,
        img: "patan_patola_saree.jpg",
        description: "Luxurious Patan Patola silk saree with intricate weaving.",
        categories: ["Patan Patola"]
    },
    {
        id: 24,
        productName: "Kasavu Saree",
        oldPrice: 1800,
        newPrice: 1500,
        img: "kasavu_saree.jpg",
        description: "Traditional Kerala Kasavu saree with golden borders.",
        categories: ["Kasavu"]
    },
    {
        id: 25,
        productName: "Baluchari Silk Saree",
        oldPrice: 2800,
        newPrice: 2400,
        img: "baluchari_silk_saree.jpg",
        description: "Exquisite Baluchari silk saree depicting mythological scenes.",
        categories: ["Baluchari Silk"]
    },
    {
        id: 26,
        productName: "Kutch Embroidered Blouse",
        oldPrice: 800,
        newPrice: 600,
        img: "kutch_embroidered_blouse.jpg",
        description: "Colorful Kutch embroidered blouse with mirror work.",
        categories: ["Kutch Embroidery"]
    },
    {
        id: 27,
        productName: "Kosa Silk Saree",
        oldPrice: 3200,
        newPrice: 2800,
        img: "kosa_silk_saree.jpg",
        description: "Fine Kosa silk saree known for its texture and sheen.",
        categories: ["Kosa Silk"]
    },
    {
        id: 28,
        productName: "Embroidered Silk Lehenga",
        oldPrice: 3500,
        newPrice: 2800,
        img: "embroidered_silk_lehenga.jpg",
        description: "Gorgeous embroidered silk lehenga for weddings and festive occasions.",
        categories: ["Bridal Collection"]
    },
    {
        id: 29,
        productName: "Cotton Silk Saree",
        oldPrice: 1600,
        newPrice: 1300,
        img: "cotton_silk_saree.jpg",
        description: "Stylish and comfortable cotton silk saree for everyday wear.",
        categories: ["Cotton Silk"]
    },
    {
        id: 30,
        productName: "Kanchipuram Silk Saree",
        oldPrice: 3000,
        newPrice: 2500,
        img: "kanchipuram_silk_saree.jpg",
        description: "Authentic Kanchipuram silk saree with traditional motifs and borders.",
        categories: ["Kanchipuram Silk"]
    }
];


export default products;