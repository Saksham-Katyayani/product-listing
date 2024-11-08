
const axios = require('axios');

const url = "https://inventory-management-backend-s37u.onrender.com/inventory"

const headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNha3NoYW0uZGV2QGthdHlheWFuaW9yZ2FuaWNzLmNvbSIsImlkIjoiNjZjNTc5ZGJmNTA1YTA0OWE4YjVjMzA3IiwiaWF0IjoxNzI4MTM3NzI0LCJleHAiOjE3MjgxODA5MjR9.buUKb8hN7GiUFdoZuBgQ31CAVdVIdBP2jsw_l17MwXo"
}

const data = [
    {
        "product_id": "K-5896",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 9
            }
        ]
    },
    {
        "product_id": "K-6393",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-167",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 98
            }
        ]
    },
    {
        "product_id": "K-5318",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-173",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 995
            }
        ]
    },
    {
        "product_id": "K-5319",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 9
            }
        ]
    },
    {
        "product_id": "K-177",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 40
            }
        ]
    },
    {
        "product_id": "K-179",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 501
            }
        ]
    },
    {
        "product_id": "K-180",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1040
            }
        ]
    },
    {
        "product_id": "K-1064",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 800
            }
        ]
    },
    {
        "product_id": "K-1066",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-1067",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 240
            }
        ]
    },
    {
        "product_id": "K-1125",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 158
            }
        ]
    },
    {
        "product_id": "K-5201",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 239
            }
        ]
    },
    {
        "product_id": "K-6010",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 239
            }
        ]
    },
    {
        "product_id": "K-6016",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 239
            }
        ]
    },
    {
        "product_id": "K-6022",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 239
            }
        ]
    },
    {
        "product_id": "K-1124",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 239
            }
        ]
    },
    {
        "product_id": "K-181",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 239
            }
        ]
    },
    {
        "product_id": "K-1145",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 220
            }
        ]
    },
    {
        "product_id": "K-186",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 22
            }
        ]
    },
    {
        "product_id": "K-1068",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1043
            }
        ]
    },
    {
        "product_id": "K-1402",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 507
            }
        ]
    },
    {
        "product_id": "K-188",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5236",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 40
            }
        ]
    },
    {
        "product_id": "K-189",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1136
            }
        ]
    },
    {
        "product_id": "K-190",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-191",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2157
            }
        ]
    },
    {
        "product_id": "K-192",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2157
            }
        ]
    },
    {
        "product_id": "K-193",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2157
            }
        ]
    },
    {
        "product_id": "K-6336",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2157
            }
        ]
    },
    {
        "product_id": "K-203",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2157
            }
        ]
    },
    {
        "product_id": "K-6659",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2157
            }
        ]
    },
    {
        "product_id": "K-205",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2157
            }
        ]
    },
    {
        "product_id": "K-206",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1190
            }
        ]
    },
    {
        "product_id": "K-207",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 7
            }
        ]
    },
    {
        "product_id": "K-208",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 7
            }
        ]
    },
    {
        "product_id": "K-6084",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 7
            }
        ]
    },
    {
        "product_id": "K-214",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1309
            }
        ]
    },
    {
        "product_id": "K-215",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-217",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3
            }
        ]
    },
    {
        "product_id": "K-219",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-5884",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 599
            }
        ]
    },
    {
        "product_id": "K-222",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 640
            }
        ]
    },
    {
        "product_id": "K-223",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 40
            }
        ]
    },
    {
        "product_id": "K-224",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 900
            }
        ]
    },
    {
        "product_id": "K-225",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 309
            }
        ]
    },
    {
        "product_id": "K-1241",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 309
            }
        ]
    },
    {
        "product_id": "K-5240",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 309
            }
        ]
    },
    {
        "product_id": "K-6073",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 309
            }
        ]
    },
    {
        "product_id": "K-240",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 309
            }
        ]
    },
    {
        "product_id": "K-241",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 309
            }
        ]
    },
    {
        "product_id": "K-242",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 309
            }
        ]
    },
    {
        "product_id": "K-244",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 17
            }
        ]
    },
    {
        "product_id": "K-245",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 17
            }
        ]
    },
    {
        "product_id": "K-246",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 17
            }
        ]
    },
    {
        "product_id": "K-247",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 212
            }
        ]
    },
    {
        "product_id": "K-254",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-255",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-6388",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 300
            }
        ]
    },
    {
        "product_id": "K-6567",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 9
            }
        ]
    },
    {
        "product_id": "K-257",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 36
            }
        ]
    },
    {
        "product_id": "K-258",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 15
            }
        ]
    },
    {
        "product_id": "K-259",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 49
            }
        ]
    },
    {
        "product_id": "K-6069",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 169
            }
        ]
    },
    {
        "product_id": "K-261",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2
            }
        ]
    },
    {
        "product_id": "K-262",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2
            }
        ]
    },
    {
        "product_id": "K-6325",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-263",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 21
            }
        ]
    },
    {
        "product_id": "K-264",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 134
            }
        ]
    },
    {
        "product_id": "K-6272",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-6363",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-6364",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-6365",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-6366",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 404
            }
        ]
    },
    {
        "product_id": "K-273",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-274",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-275",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-276",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-5911",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 681
            }
        ]
    },
    {
        "product_id": "K-5876",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 681
            }
        ]
    },
    {
        "product_id": "K-6378",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 681
            }
        ]
    },
    {
        "product_id": "K-279",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1241
            }
        ]
    },
    {
        "product_id": "K-280",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 273
            }
        ]
    },
    {
        "product_id": "K-281",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 499
            }
        ]
    },
    {
        "product_id": "K-5280",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2001
            }
        ]
    },
    {
        "product_id": "K-5940",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6
            }
        ]
    },
    {
        "product_id": "K-290",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 67
            }
        ]
    },
    {
        "product_id": "K-291",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 67
            }
        ]
    },
    {
        "product_id": "K-292",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 67
            }
        ]
    },
    {
        "product_id": "K-293",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 994
            }
        ]
    },
    {
        "product_id": "K-295",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 295
            }
        ]
    },
    {
        "product_id": "K-297",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 295
            }
        ]
    },
    {
        "product_id": "K-298",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 8
            }
        ]
    },
    {
        "product_id": "K-6370",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-299",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-300",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-301",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-5250",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 20
            }
        ]
    },
    {
        "product_id": "K-6088",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 242
            }
        ]
    },
    {
        "product_id": "K-304",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-305",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 242
            }
        ]
    },
    {
        "product_id": "K-6244",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 242
            }
        ]
    },
    {
        "product_id": "K-306",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 242
            }
        ]
    },
    {
        "product_id": "K-307",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-308",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 59
            }
        ]
    },
    {
        "product_id": "K-317",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 59
            }
        ]
    },
    {
        "product_id": "K-6564",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-318",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 120
            }
        ]
    },
    {
        "product_id": "K-6594",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 94
            }
        ]
    },
    {
        "product_id": "K-319",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 40
            }
        ]
    },
    {
        "product_id": "K-320",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 94
            }
        ]
    },
    {
        "product_id": "K-322",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 204
            }
        ]
    },
    {
        "product_id": "K-323",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 204
            }
        ]
    },
    {
        "product_id": "K-5005",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 525
            }
        ]
    },
    {
        "product_id": "K-5428",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 120
            }
        ]
    },
    {
        "product_id": "K-6603",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 120
            }
        ]
    },
    {
        "product_id": "K-5104",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 120
            }
        ]
    },
    {
        "product_id": "K-5714",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 120
            }
        ]
    },
    {
        "product_id": "K-6602",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1042
            }
        ]
    },
    {
        "product_id": "K-5715",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1042
            }
        ]
    },
    {
        "product_id": "K-5716",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1042
            }
        ]
    },
    {
        "product_id": "K-5717",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1042
            }
        ]
    },
    {
        "product_id": "K-6361",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 5
            }
        ]
    },
    {
        "product_id": "K-333",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 9
            }
        ]
    },
    {
        "product_id": "K-987",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 75
            }
        ]
    },
    {
        "product_id": "K-336",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 70
            }
        ]
    },
    {
        "product_id": "K-6439",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1157
            }
        ]
    },
    {
        "product_id": "K-10515",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-339",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 169
            }
        ]
    },
    {
        "product_id": "K-340",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 169
            }
        ]
    },
    {
        "product_id": "K-341",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 169
            }
        ]
    },
    {
        "product_id": "K-342",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 169
            }
        ]
    },
    {
        "product_id": "K-6035",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 169
            }
        ]
    },
    {
        "product_id": "K-5643",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 27
            }
        ]
    },
    {
        "product_id": "K-344",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-345",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-346",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-347",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-348",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-349",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-6053",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-6013",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-350",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 817
            }
        ]
    },
    {
        "product_id": "K-351",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 140
            }
        ]
    },
    {
        "product_id": "K-352",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 140
            }
        ]
    },
    {
        "product_id": "K-6379",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 140
            }
        ]
    },
    {
        "product_id": "K-353",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 140
            }
        ]
    },
    {
        "product_id": "K-5910",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 346
            }
        ]
    },
    {
        "product_id": "K-355",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 836
            }
        ]
    },
    {
        "product_id": "K-1095",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 836
            }
        ]
    },
    {
        "product_id": "K-356",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 836
            }
        ]
    },
    {
        "product_id": "K-357",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 836
            }
        ]
    },
    {
        "product_id": "K-358",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 977
            }
        ]
    },
    {
        "product_id": "K-359",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1034
            }
        ]
    },
    {
        "product_id": "K-360",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1034
            }
        ]
    },
    {
        "product_id": "K-10530",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1034
            }
        ]
    },
    {
        "product_id": "K-1213",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1034
            }
        ]
    },
    {
        "product_id": "K-6075",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 20
            }
        ]
    },
    {
        "product_id": "K-6008",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 766
            }
        ]
    },
    {
        "product_id": "K-5793",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 766
            }
        ]
    },
    {
        "product_id": "K-5177",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 766
            }
        ]
    },
    {
        "product_id": "K-361",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 766
            }
        ]
    },
    {
        "product_id": "K-362",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 752
            }
        ]
    },
    {
        "product_id": "K-363",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 752
            }
        ]
    },
    {
        "product_id": "K-364",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 752
            }
        ]
    },
    {
        "product_id": "K-1096",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 752
            }
        ]
    },
    {
        "product_id": "K-366",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 436
            }
        ]
    },
    {
        "product_id": "K-6362",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 436
            }
        ]
    },
    {
        "product_id": "K-6474",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 997
            }
        ]
    },
    {
        "product_id": "K-367",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 9
            }
        ]
    },
    {
        "product_id": "K-368",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 9
            }
        ]
    },
    {
        "product_id": "K-6685",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 9
            }
        ]
    },
    {
        "product_id": "K-369",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 9
            }
        ]
    },
    {
        "product_id": "K-370",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 143
            }
        ]
    },
    {
        "product_id": "K-371",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 55
            }
        ]
    },
    {
        "product_id": "K-372",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 98
            }
        ]
    },
    {
        "product_id": "K-5903",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 98
            }
        ]
    },
    {
        "product_id": "K-213",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 98
            }
        ]
    },
    {
        "product_id": "K-5753",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 51
            }
        ]
    },
    {
        "product_id": "K-5776",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 894
            }
        ]
    },
    {
        "product_id": "K-5777",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 894
            }
        ]
    },
    {
        "product_id": "K-5778",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 894
            }
        ]
    },
    {
        "product_id": "K-5779",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 894
            }
        ]
    },
    {
        "product_id": "K-376",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 386
            }
        ]
    },
    {
        "product_id": "K-377",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 386
            }
        ]
    },
    {
        "product_id": "K-378",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 386
            }
        ]
    },
    {
        "product_id": "K-379",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 386
            }
        ]
    },
    {
        "product_id": "K-380",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 160
            }
        ]
    },
    {
        "product_id": "K-5100",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1188
            }
        ]
    },
    {
        "product_id": "K-5207",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1188
            }
        ]
    },
    {
        "product_id": "K-5380",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1188
            }
        ]
    },
    {
        "product_id": "K-375",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1188
            }
        ]
    },
    {
        "product_id": "K-6631",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 138
            }
        ]
    },
    {
        "product_id": "K-381",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 180
            }
        ]
    },
    {
        "product_id": "K-382",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 180
            }
        ]
    },
    {
        "product_id": "K-1244",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 180
            }
        ]
    },
    {
        "product_id": "K-383",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-384",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 180
            }
        ]
    },
    {
        "product_id": "K-385",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 180
            }
        ]
    },
    {
        "product_id": "K-5718",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 318
            }
        ]
    },
    {
        "product_id": "K-5719",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 318
            }
        ]
    },
    {
        "product_id": "K-5720",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 318
            }
        ]
    },
    {
        "product_id": "K-5721",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 318
            }
        ]
    },
    {
        "product_id": "K-5722",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 152
            }
        ]
    },
    {
        "product_id": "K-5774",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 846
            }
        ]
    },
    {
        "product_id": "K-6690",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 846
            }
        ]
    },
    {
        "product_id": "K-388",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 846
            }
        ]
    },
    {
        "product_id": "K-389",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 846
            }
        ]
    },
    {
        "product_id": "K-390",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 846
            }
        ]
    },
    {
        "product_id": "K-391",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 846
            }
        ]
    },
    {
        "product_id": "K-392",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 63
            }
        ]
    },
    {
        "product_id": "K-393",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-1081",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 45
            }
        ]
    },
    {
        "product_id": "K-394",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 45
            }
        ]
    },
    {
        "product_id": "K-5781",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 45
            }
        ]
    },
    {
        "product_id": "K-6502",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 45
            }
        ]
    },
    {
        "product_id": "K-6610",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6
            }
        ]
    },
    {
        "product_id": "K-6611",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6
            }
        ]
    },
    {
        "product_id": "K-6612",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6
            }
        ]
    },
    {
        "product_id": "K-5897",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 512
            }
        ]
    },
    {
        "product_id": "K-6021",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 512
            }
        ]
    },
    {
        "product_id": "K-395",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 512
            }
        ]
    },
    {
        "product_id": "K-5885",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 512
            }
        ]
    },
    {
        "product_id": "K-396",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 512
            }
        ]
    },
    {
        "product_id": "K-397",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-399",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 8
            }
        ]
    },
    {
        "product_id": "K-400",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 40
            }
        ]
    },
    {
        "product_id": "K-991",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 559
            }
        ]
    },
    {
        "product_id": "K-401",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 559
            }
        ]
    },
    {
        "product_id": "K-1245",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 559
            }
        ]
    },
    {
        "product_id": "K-992",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 559
            }
        ]
    },
    {
        "product_id": "K-5800",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 559
            }
        ]
    },
    {
        "product_id": "K-5899",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-402",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 385
            }
        ]
    },
    {
        "product_id": "K-403",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 385
            }
        ]
    },
    {
        "product_id": "K-6039",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 385
            }
        ]
    },
    {
        "product_id": "K-6005",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 385
            }
        ]
    },
    {
        "product_id": "K-404",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 385
            }
        ]
    },
    {
        "product_id": "K-405",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 385
            }
        ]
    },
    {
        "product_id": "K-5922",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1075
            }
        ]
    },
    {
        "product_id": "K-993",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1075
            }
        ]
    },
    {
        "product_id": "K-6001",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1075
            }
        ]
    },
    {
        "product_id": "K-6030",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1075
            }
        ]
    },
    {
        "product_id": "K-406",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1303
            }
        ]
    },
    {
        "product_id": "K-407",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1303
            }
        ]
    },
    {
        "product_id": "K-408",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1303
            }
        ]
    },
    {
        "product_id": "K-409",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 194
            }
        ]
    },
    {
        "product_id": "K-410",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 294
            }
        ]
    },
    {
        "product_id": "K-411",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 294
            }
        ]
    },
    {
        "product_id": "K-412",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 294
            }
        ]
    },
    {
        "product_id": "K-413",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 294
            }
        ]
    },
    {
        "product_id": "K-414",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 294
            }
        ]
    },
    {
        "product_id": "K-415",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 294
            }
        ]
    },
    {
        "product_id": "K-1332",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 152
            }
        ]
    },
    {
        "product_id": "K-6057",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 152
            }
        ]
    },
    {
        "product_id": "K-1248",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 152
            }
        ]
    },
    {
        "product_id": "K-6269",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 152
            }
        ]
    },
    {
        "product_id": "K-416",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 152
            }
        ]
    },
    {
        "product_id": "K-417",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-6036",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1975
            }
        ]
    },
    {
        "product_id": "K-420",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1975
            }
        ]
    },
    {
        "product_id": "K-5286",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1975
            }
        ]
    },
    {
        "product_id": "K-421",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1975
            }
        ]
    },
    {
        "product_id": "K-423",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 60
            }
        ]
    },
    {
        "product_id": "K-5938",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-959",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-426",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-5852",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 60
            }
        ]
    },
    {
        "product_id": "K-5880",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1011
            }
        ]
    },
    {
        "product_id": "K-430",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1011
            }
        ]
    },
    {
        "product_id": "K-5313",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 504
            }
        ]
    },
    {
        "product_id": "K-5314",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 263
            }
        ]
    },
    {
        "product_id": "K-5315",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 160
            }
        ]
    },
    {
        "product_id": "K-1251",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 80
            }
        ]
    },
    {
        "product_id": "K-5078",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 21
            }
        ]
    },
    {
        "product_id": "K-6435",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 185
            }
        ]
    },
    {
        "product_id": "K-882",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 185
            }
        ]
    },
    {
        "product_id": "K-883",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 185
            }
        ]
    },
    {
        "product_id": "K-5788",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 94
            }
        ]
    },
    {
        "product_id": "K-886",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 94
            }
        ]
    },
    {
        "product_id": "K-887",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 94
            }
        ]
    },
    {
        "product_id": "K-890",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 130
            }
        ]
    },
    {
        "product_id": "K-5820",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 378
            }
        ]
    },
    {
        "product_id": "K-897",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 378
            }
        ]
    },
    {
        "product_id": "K-898",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 378
            }
        ]
    },
    {
        "product_id": "K-6436",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 52
            }
        ]
    },
    {
        "product_id": "K-901",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 52
            }
        ]
    },
    {
        "product_id": "K-902",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 52
            }
        ]
    },
    {
        "product_id": "K-6319",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 11
            }
        ]
    },
    {
        "product_id": "K-905",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1300
            }
        ]
    },
    {
        "product_id": "K-906",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-5836",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6
            }
        ]
    },
    {
        "product_id": "K-909",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-910",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-5837",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 40
            }
        ]
    },
    {
        "product_id": "K-6052",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 147
            }
        ]
    },
    {
        "product_id": "K-920",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-921",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3
            }
        ]
    },
    {
        "product_id": "K-936",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 25
            }
        ]
    },
    {
        "product_id": "K-5841",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5846",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 48
            }
        ]
    },
    {
        "product_id": "K-5203",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2085
            }
        ]
    },
    {
        "product_id": "K-961",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1021
            }
        ]
    },
    {
        "product_id": "K-1249",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 963
            }
        ]
    },
    {
        "product_id": "K-1255",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3210
            }
        ]
    },
    {
        "product_id": "K-1256",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 49
            }
        ]
    },
    {
        "product_id": "K-1257",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 49
            }
        ]
    },
    {
        "product_id": "K-1258",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 49
            }
        ]
    },
    {
        "product_id": "K-5805",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 49
            }
        ]
    },
    {
        "product_id": "K-5902",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 49
            }
        ]
    },
    {
        "product_id": "K-5901",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 49
            }
        ]
    },
    {
        "product_id": "K-5975",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 49
            }
        ]
    },
    {
        "product_id": "K-5870",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 49
            }
        ]
    },
    {
        "product_id": "K-5871",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 49
            }
        ]
    },
    {
        "product_id": "K-1263",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5209",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2782
            }
        ]
    },
    {
        "product_id": "K-6268",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1222
            }
        ]
    },
    {
        "product_id": "K-5833",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1021
            }
        ]
    },
    {
        "product_id": "K-5368",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-5206",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-1267",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-1268",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5888",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-1276",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 5
            }
        ]
    },
    {
        "product_id": "K-5847",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5929",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-1277",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5771",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1001
            }
        ]
    },
    {
        "product_id": "K-5772",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1001
            }
        ]
    },
    {
        "product_id": "K-5773",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1001
            }
        ]
    },
    {
        "product_id": "K-5851",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1001
            }
        ]
    },
    {
        "product_id": "K-6614",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 21
            }
        ]
    },
    {
        "product_id": "K-6615",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 325
            }
        ]
    },
    {
        "product_id": "K-6494",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6
            }
        ]
    },
    {
        "product_id": "K-6146",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 160
            }
        ]
    },
    {
        "product_id": "K-1278",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3
            }
        ]
    },
    {
        "product_id": "K-6147",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 41
            }
        ]
    },
    {
        "product_id": "K-6144",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 41
            }
        ]
    },
    {
        "product_id": "K-1279",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 73
            }
        ]
    },
    {
        "product_id": "K-5834",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 101
            }
        ]
    },
    {
        "product_id": "K-5828",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 996
            }
        ]
    },
    {
        "product_id": "K-5893",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 61
            }
        ]
    },
    {
        "product_id": "K-5622",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1081
            }
        ]
    },
    {
        "product_id": "K-5623",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 800
            }
        ]
    },
    {
        "product_id": "K-5624",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 400
            }
        ]
    },
    {
        "product_id": "K-5625",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 161
            }
        ]
    },
    {
        "product_id": "K-6717",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 161
            }
        ]
    },
    {
        "product_id": "K-1111",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 161
            }
        ]
    },
    {
        "product_id": "K-1112",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 379
            }
        ]
    },
    {
        "product_id": "K-1113",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-1281",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 7
            }
        ]
    },
    {
        "product_id": "K-1282",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 46
            }
        ]
    },
    {
        "product_id": "K-1283",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 134
            }
        ]
    },
    {
        "product_id": "K-6271",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 173
            }
        ]
    },
    {
        "product_id": "K-1288",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 173
            }
        ]
    },
    {
        "product_id": "K-6279",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-1308",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 200
            }
        ]
    },
    {
        "product_id": "K-1309",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 415
            }
        ]
    },
    {
        "product_id": "K-1310",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 73
            }
        ]
    },
    {
        "product_id": "K-1311",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-6003",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 31
            }
        ]
    },
    {
        "product_id": "K-5931",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 548
            }
        ]
    },
    {
        "product_id": "K-6477",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 548
            }
        ]
    },
    {
        "product_id": "K-6403",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 548
            }
        ]
    },
    {
        "product_id": "K-5872",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 355
            }
        ]
    },
    {
        "product_id": "K-5215",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 205
            }
        ]
    },
    {
        "product_id": "K-1346",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2
            }
        ]
    },
    {
        "product_id": "K-1347",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2
            }
        ]
    },
    {
        "product_id": "K-1348",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 278
            }
        ]
    },
    {
        "product_id": "K-1349",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 148
            }
        ]
    },
    {
        "product_id": "K-1350",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1054
            }
        ]
    },
    {
        "product_id": "K-1355",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-1356",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1002
            }
        ]
    },
    {
        "product_id": "K-1358",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5027",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6152",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2085
            }
        ]
    },
    {
        "product_id": "K-6153",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 32
            }
        ]
    },
    {
        "product_id": "K-6154",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3297
            }
        ]
    },
    {
        "product_id": "K-6155",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3297
            }
        ]
    },
    {
        "product_id": "K-6156",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3297
            }
        ]
    },
    {
        "product_id": "K-1359",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3297
            }
        ]
    },
    {
        "product_id": "K-1360",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3297
            }
        ]
    },
    {
        "product_id": "K-6693",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1967
            }
        ]
    },
    {
        "product_id": "K-1362",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1967
            }
        ]
    },
    {
        "product_id": "K-6694",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1967
            }
        ]
    },
    {
        "product_id": "K-6157",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1967
            }
        ]
    },
    {
        "product_id": "K-1363",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1967
            }
        ]
    },
    {
        "product_id": "K-1364",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1967
            }
        ]
    },
    {
        "product_id": "K-1366",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1967
            }
        ]
    },
    {
        "product_id": "K-1367",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 38
            }
        ]
    },
    {
        "product_id": "K-1369",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 38
            }
        ]
    },
    {
        "product_id": "K-1370",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1209
            }
        ]
    },
    {
        "product_id": "K-1371",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1054
            }
        ]
    },
    {
        "product_id": "K-1372",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1054
            }
        ]
    },
    {
        "product_id": "K-1373",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1054
            }
        ]
    },
    {
        "product_id": "K-1375",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 278
            }
        ]
    },
    {
        "product_id": "K-1376",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 278
            }
        ]
    },
    {
        "product_id": "K-1377",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 278
            }
        ]
    },
    {
        "product_id": "K-1397",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 80
            }
        ]
    },
    {
        "product_id": "K-1399",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 477
            }
        ]
    },
    {
        "product_id": "K-1400",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 477
            }
        ]
    },
    {
        "product_id": "K-6045",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 477
            }
        ]
    },
    {
        "product_id": "K-5644",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 499
            }
        ]
    },
    {
        "product_id": "K-5791",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 499
            }
        ]
    },
    {
        "product_id": "K-5976",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 370
            }
        ]
    },
    {
        "product_id": "K-5797",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 148
            }
        ]
    },
    {
        "product_id": "K-5155",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 148
            }
        ]
    },
    {
        "product_id": "K-5156",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 148
            }
        ]
    },
    {
        "product_id": "K-5157",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 148
            }
        ]
    },
    {
        "product_id": "K-5158",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 172
            }
        ]
    },
    {
        "product_id": "K-5952",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 172
            }
        ]
    },
    {
        "product_id": "K-5159",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 172
            }
        ]
    },
    {
        "product_id": "K-5160",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 172
            }
        ]
    },
    {
        "product_id": "K-5161",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2006
            }
        ]
    },
    {
        "product_id": "K-5162",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 20
            }
        ]
    },
    {
        "product_id": "K-5798",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-5163",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-5164",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-5165",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-5166",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-5799",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-5167",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 155
            }
        ]
    },
    {
        "product_id": "K-5168",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 155
            }
        ]
    },
    {
        "product_id": "K-5169",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 155
            }
        ]
    },
    {
        "product_id": "K-5170",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 155
            }
        ]
    },
    {
        "product_id": "K-6000",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 208
            }
        ]
    },
    {
        "product_id": "K-5229",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 208
            }
        ]
    },
    {
        "product_id": "K-5683",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 208
            }
        ]
    },
    {
        "product_id": "K-5210",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 315
            }
        ]
    },
    {
        "product_id": "K-5461",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 315
            }
        ]
    },
    {
        "product_id": "K-5462",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 286
            }
        ]
    },
    {
        "product_id": "K-5463",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 286
            }
        ]
    },
    {
        "product_id": "K-5464",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 286
            }
        ]
    },
    {
        "product_id": "K-6703",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 286
            }
        ]
    },
    {
        "product_id": "K-5548",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1585
            }
        ]
    },
    {
        "product_id": "K-5549",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1585
            }
        ]
    },
    {
        "product_id": "K-5550",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1585
            }
        ]
    },
    {
        "product_id": "K-6704",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1585
            }
        ]
    },
    {
        "product_id": "K-5552",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3
            }
        ]
    },
    {
        "product_id": "K-5553",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 458
            }
        ]
    },
    {
        "product_id": "K-5554",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 458
            }
        ]
    },
    {
        "product_id": "K-5555",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 805
            }
        ]
    },
    {
        "product_id": "K-6387",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 805
            }
        ]
    },
    {
        "product_id": "K-5556",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 805
            }
        ]
    },
    {
        "product_id": "K-5557",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 805
            }
        ]
    },
    {
        "product_id": "K-5558",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 805
            }
        ]
    },
    {
        "product_id": "K-5559",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 805
            }
        ]
    },
    {
        "product_id": "K-6710",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 805
            }
        ]
    },
    {
        "product_id": "K-5560",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 805
            }
        ]
    },
    {
        "product_id": "K-5561",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 458
            }
        ]
    },
    {
        "product_id": "K-5562",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 458
            }
        ]
    },
    {
        "product_id": "K-5563",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 458
            }
        ]
    },
    {
        "product_id": "K-5564",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 926
            }
        ]
    },
    {
        "product_id": "K-5565",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 926
            }
        ]
    },
    {
        "product_id": "K-5566",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 926
            }
        ]
    },
    {
        "product_id": "K-6426",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 926
            }
        ]
    },
    {
        "product_id": "K-6427",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 99
            }
        ]
    },
    {
        "product_id": "K-6604",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 173
            }
        ]
    },
    {
        "product_id": "K-6480",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 173
            }
        ]
    },
    {
        "product_id": "K-6481",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 173
            }
        ]
    },
    {
        "product_id": "K-6482",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 926
            }
        ]
    },
    {
        "product_id": "K-6031",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 209
            }
        ]
    },
    {
        "product_id": "K-6037",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 131
            }
        ]
    },
    {
        "product_id": "K-5577",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 131
            }
        ]
    },
    {
        "product_id": "K-5578",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 131
            }
        ]
    },
    {
        "product_id": "K-5579",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 131
            }
        ]
    },
    {
        "product_id": "K-5580",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 275
            }
        ]
    },
    {
        "product_id": "K-5730",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 275
            }
        ]
    },
    {
        "product_id": "K-5582",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 275
            }
        ]
    },
    {
        "product_id": "K-5583",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 275
            }
        ]
    },
    {
        "product_id": "K-5584",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2
            }
        ]
    },
    {
        "product_id": "K-5585",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 29
            }
        ]
    },
    {
        "product_id": "K-5586",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 29
            }
        ]
    },
    {
        "product_id": "K-5587",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 29
            }
        ]
    },
    {
        "product_id": "K-6701",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 29
            }
        ]
    },
    {
        "product_id": "K-6493",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 996
            }
        ]
    },
    {
        "product_id": "K-5588",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 996
            }
        ]
    },
    {
        "product_id": "K-5589",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 996
            }
        ]
    },
    {
        "product_id": "K-6672",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 282
            }
        ]
    },
    {
        "product_id": "K-5626",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 282
            }
        ]
    },
    {
        "product_id": "K-6568",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 282
            }
        ]
    },
    {
        "product_id": "K-5627",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 282
            }
        ]
    },
    {
        "product_id": "K-5628",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 79
            }
        ]
    },
    {
        "product_id": "K-5629",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 751
            }
        ]
    },
    {
        "product_id": "K-6381",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 751
            }
        ]
    },
    {
        "product_id": "K-6339",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 751
            }
        ]
    },
    {
        "product_id": "K-5416",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 195
            }
        ]
    },
    {
        "product_id": "K-5417",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 195
            }
        ]
    },
    {
        "product_id": "K-5418",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 195
            }
        ]
    },
    {
        "product_id": "K-5419",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 195
            }
        ]
    },
    {
        "product_id": "K-5420",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 195
            }
        ]
    },
    {
        "product_id": "K-5421",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-5592",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-5593",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-5594",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-5654",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 732
            }
        ]
    },
    {
        "product_id": "K-5655",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1004
            }
        ]
    },
    {
        "product_id": "K-5656",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1004
            }
        ]
    },
    {
        "product_id": "K-5617",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 58
            }
        ]
    },
    {
        "product_id": "K-5618",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 58
            }
        ]
    },
    {
        "product_id": "K-5619",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 58
            }
        ]
    },
    {
        "product_id": "K-5620",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 58
            }
        ]
    },
    {
        "product_id": "K-5621",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 170
            }
        ]
    },
    {
        "product_id": "K-5708",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 40
            }
        ]
    },
    {
        "product_id": "K-5709",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-5710",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2
            }
        ]
    },
    {
        "product_id": "K-5712",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 15
            }
        ]
    },
    {
        "product_id": "K-6270",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-6360",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2
            }
        ]
    },
    {
        "product_id": "K-5747",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 800
            }
        ]
    },
    {
        "product_id": "K-5879",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6197
            }
        ]
    },
    {
        "product_id": "K-5963",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1015
            }
        ]
    },
    {
        "product_id": "K-5245",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1015
            }
        ]
    },
    {
        "product_id": "K-5983",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6197
            }
        ]
    },
    {
        "product_id": "K-5984",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6197
            }
        ]
    },
    {
        "product_id": "K-5252",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1015
            }
        ]
    },
    {
        "product_id": "K-5219",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1411
            }
        ]
    },
    {
        "product_id": "K-236",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1411
            }
        ]
    },
    {
        "product_id": "K-6163",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1900
            }
        ]
    },
    {
        "product_id": "K-6041",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 139
            }
        ]
    },
    {
        "product_id": "K-6042",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 20
            }
        ]
    },
    {
        "product_id": "K-6043",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 161
            }
        ]
    },
    {
        "product_id": "K-6044",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 161
            }
        ]
    },
    {
        "product_id": "K-6040",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 161
            }
        ]
    },
    {
        "product_id": "K-6697",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 161
            }
        ]
    },
    {
        "product_id": "K-6698",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 161
            }
        ]
    },
    {
        "product_id": "K-5939",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 161
            }
        ]
    },
    {
        "product_id": "K-5982",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 161
            }
        ]
    },
    {
        "product_id": "K-5992",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 32
            }
        ]
    },
    {
        "product_id": "K-5993",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 111
            }
        ]
    },
    {
        "product_id": "K-6228",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 53
            }
        ]
    },
    {
        "product_id": "K-5995",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 41
            }
        ]
    },
    {
        "product_id": "K-6009",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 479
            }
        ]
    },
    {
        "product_id": "K-6014",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 479
            }
        ]
    },
    {
        "product_id": "K-6083",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 325
            }
        ]
    },
    {
        "product_id": "K-6100",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 217
            }
        ]
    },
    {
        "product_id": "K-6101",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-6121",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 360
            }
        ]
    },
    {
        "product_id": "K-6102",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1129
            }
        ]
    },
    {
        "product_id": "K-6103",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 460
            }
        ]
    },
    {
        "product_id": "K-6122",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1372
            }
        ]
    },
    {
        "product_id": "K-6106",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 11
            }
        ]
    },
    {
        "product_id": "K-6107",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-6123",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-6138",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1003
            }
        ]
    },
    {
        "product_id": "K-6139",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1059
            }
        ]
    },
    {
        "product_id": "K-6140",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1059
            }
        ]
    },
    {
        "product_id": "K-6423",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1825
            }
        ]
    },
    {
        "product_id": "K-6420",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 400
            }
        ]
    },
    {
        "product_id": "K-6691",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1028
            }
        ]
    },
    {
        "product_id": "K-6569",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 192
            }
        ]
    },
    {
        "product_id": "K-6110",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 520
            }
        ]
    },
    {
        "product_id": "K-6113",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1022
            }
        ]
    },
    {
        "product_id": "K-6114",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1022
            }
        ]
    },
    {
        "product_id": "K-6115",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1022
            }
        ]
    },
    {
        "product_id": "K-5981",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-6609",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 110
            }
        ]
    },
    {
        "product_id": "K-6217",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 110
            }
        ]
    },
    {
        "product_id": "K-6606",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-6234",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-6250",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-6251",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-6252",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 110
            }
        ]
    },
    {
        "product_id": "K-6235",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 11
            }
        ]
    },
    {
        "product_id": "K-6253",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2054
            }
        ]
    },
    {
        "product_id": "K-6475",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2054
            }
        ]
    },
    {
        "product_id": "K-6236",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2054
            }
        ]
    },
    {
        "product_id": "K-6256",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2054
            }
        ]
    },
    {
        "product_id": "K-6259",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2938
            }
        ]
    },
    {
        "product_id": "K-6419",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 400
            }
        ]
    },
    {
        "product_id": "K-6330",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 537
            }
        ]
    },
    {
        "product_id": "K-6322",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 537
            }
        ]
    },
    {
        "product_id": "K-6404",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 537
            }
        ]
    },
    {
        "product_id": "K-6526",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-6527",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-6528",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-6529",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-6506",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 204
            }
        ]
    },
    {
        "product_id": "K-6507",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 204
            }
        ]
    },
    {
        "product_id": "K-6508",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 204
            }
        ]
    },
    {
        "product_id": "K-6509",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1201
            }
        ]
    },
    {
        "product_id": "K-6522",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1201
            }
        ]
    },
    {
        "product_id": "K-6523",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1201
            }
        ]
    },
    {
        "product_id": "K-6524",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 220
            }
        ]
    },
    {
        "product_id": "K-6525",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 220
            }
        ]
    },
    {
        "product_id": "K-6531",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 220
            }
        ]
    },
    {
        "product_id": "K-6535",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3038
            }
        ]
    },
    {
        "product_id": "K-6536",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3038
            }
        ]
    },
    {
        "product_id": "K-6537",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3038
            }
        ]
    },
    {
        "product_id": "K-6538",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3038
            }
        ]
    },
    {
        "product_id": "K-6540",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 601
            }
        ]
    },
    {
        "product_id": "K-6563",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 601
            }
        ]
    },
    {
        "product_id": "K-10523",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 601
            }
        ]
    },
    {
        "product_id": "K-5864",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 507
            }
        ]
    },
    {
        "product_id": "K-5875",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 507
            }
        ]
    },
    {
        "product_id": "K-6358",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 507
            }
        ]
    },
    {
        "product_id": "K-02",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 507
            }
        ]
    },
    {
        "product_id": "K-03",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-1194",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-04",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 304
            }
        ]
    },
    {
        "product_id": "K-1134",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 304
            }
        ]
    },
    {
        "product_id": "K-06",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 304
            }
        ]
    },
    {
        "product_id": "K-08",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 536
            }
        ]
    },
    {
        "product_id": "K-5214",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 536
            }
        ]
    },
    {
        "product_id": "K-5263",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 536
            }
        ]
    },
    {
        "product_id": "K-6497",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 536
            }
        ]
    },
    {
        "product_id": "K-10",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-12",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-14",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6
            }
        ]
    },
    {
        "product_id": "K-15",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 200
            }
        ]
    },
    {
        "product_id": "K-16",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 200
            }
        ]
    },
    {
        "product_id": "K-5997",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 997
            }
        ]
    },
    {
        "product_id": "K-1195",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1019
            }
        ]
    },
    {
        "product_id": "K-1157",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-5013",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1044
            }
        ]
    },
    {
        "product_id": "K-1146",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 15
            }
        ]
    },
    {
        "product_id": "K-1122",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 80
            }
        ]
    },
    {
        "product_id": "K-19",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-20",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-21",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-1163",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-5857",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-22",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-23",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-1180",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-6129",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-986",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-6554",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-24",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-6054",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-26",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-6055",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-10503",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-10504",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-28",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-1176",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-1200",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-6432",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 20
            }
        ]
    },
    {
        "product_id": "K-6373",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 49
            }
        ]
    },
    {
        "product_id": "K-5470",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 25
            }
        ]
    },
    {
        "product_id": "K-5328",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-6150",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-5003",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-1061",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-5186",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2641
            }
        ]
    },
    {
        "product_id": "K-6376",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2641
            }
        ]
    },
    {
        "product_id": "K-1184",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2641
            }
        ]
    },
    {
        "product_id": "K-30",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2641
            }
        ]
    },
    {
        "product_id": "K-31",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2641
            }
        ]
    },
    {
        "product_id": "K-6565",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2641
            }
        ]
    },
    {
        "product_id": "K-32",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-33",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-34",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-35",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-1165",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-5070",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 40
            }
        ]
    },
    {
        "product_id": "K-36",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2000
            }
        ]
    },
    {
        "product_id": "K-37",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2000
            }
        ]
    },
    {
        "product_id": "K-38",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2000
            }
        ]
    },
    {
        "product_id": "K-6670",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2000
            }
        ]
    },
    {
        "product_id": "K-39",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-1132",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 25
            }
        ]
    },
    {
        "product_id": "K-40",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-41",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-42",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-43",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-1192",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 20
            }
        ]
    },
    {
        "product_id": "K-1056",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 20
            }
        ]
    },
    {
        "product_id": "K-1057",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2
            }
        ]
    },
    {
        "product_id": "K-49",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-5270",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 5
            }
        ]
    },
    {
        "product_id": "K-52",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-6605",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-53",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 20
            }
        ]
    },
    {
        "product_id": "K-55",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 22
            }
        ]
    },
    {
        "product_id": "K-56",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1199
            }
        ]
    },
    {
        "product_id": "K-6020",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5645",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 250
            }
        ]
    },
    {
        "product_id": "K-51",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-1154",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1028
            }
        ]
    },
    {
        "product_id": "K-5863",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1400
            }
        ]
    },
    {
        "product_id": "K-58",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-59",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1435
            }
        ]
    },
    {
        "product_id": "K-10508",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 22
            }
        ]
    },
    {
        "product_id": "K-61",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-62",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 160
            }
        ]
    },
    {
        "product_id": "K-6581",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 200
            }
        ]
    },
    {
        "product_id": "K-5459",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-1126",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2000
            }
        ]
    },
    {
        "product_id": "K-1130",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 83
            }
        ]
    },
    {
        "product_id": "K-1201",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3439
            }
        ]
    },
    {
        "product_id": "K-5475",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 5876
            }
        ]
    },
    {
        "product_id": "K-5336",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3256
            }
        ]
    },
    {
        "product_id": "K-1162",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-1168",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 200
            }
        ]
    },
    {
        "product_id": "K-6093",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 300
            }
        ]
    },
    {
        "product_id": "K-6391",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 300
            }
        ]
    },
    {
        "product_id": "K-66",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4499
            }
        ]
    },
    {
        "product_id": "K-67",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 98
            }
        ]
    },
    {
        "product_id": "K-68",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-1140",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 20
            }
        ]
    },
    {
        "product_id": "K-1128",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 450
            }
        ]
    },
    {
        "product_id": "K-1147",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-5227",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 449
            }
        ]
    },
    {
        "product_id": "K-72",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-75",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-76",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-77",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 80
            }
        ]
    },
    {
        "product_id": "K-78",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-79",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-80",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-81",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 40
            }
        ]
    },
    {
        "product_id": "K-82",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 502
            }
        ]
    },
    {
        "product_id": "K-84",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 502
            }
        ]
    },
    {
        "product_id": "K-85",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 675
            }
        ]
    },
    {
        "product_id": "K-91",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4963
            }
        ]
    },
    {
        "product_id": "K-95",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 15
            }
        ]
    },
    {
        "product_id": "K-96",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 76
            }
        ]
    },
    {
        "product_id": "K-98",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-99",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5830",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-102",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-103",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-104",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-105",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-106",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-107",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-108",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-109",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-110",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-111",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-112",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-6275",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-114",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-115",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 800
            }
        ]
    },
    {
        "product_id": "K-116",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2000
            }
        ]
    },
    {
        "product_id": "K-5004",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-118",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-120",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-10529",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-1150",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-6227",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-6289",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-6290",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-124",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-125",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-126",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-130",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-132",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-133",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-134",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-135",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-136",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-1148",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2
            }
        ]
    },
    {
        "product_id": "K-5835",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-6400",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5754",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-137",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-1142",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-138",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-139",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-140",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2
            }
        ]
    },
    {
        "product_id": "K-6392",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-141",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-6595",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-142",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-143",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-144",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-145",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-5012",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5881",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-6407",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-6408",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2
            }
        ]
    },
    {
        "product_id": "K-6409",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-6410",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-152",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2
            }
        ]
    },
    {
        "product_id": "K-153",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-154",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-155",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5043",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-5196",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-5908",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5069",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-6027",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-6028",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5446",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5331",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5301",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-6634",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-6562",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2
            }
        ]
    },
    {
        "product_id": "K-5907",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5302",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-158",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-159",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-160",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-161",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-6635",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-874",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5324",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-165",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5630",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2
            }
        ]
    },
    {
        "product_id": "K-5300",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-1155",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-5329",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5898",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-867",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-1173",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-869",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-871",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-10510",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-872",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5304",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-5305",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-873",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5306",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-6664",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5447",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-931",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5310",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-6558",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-6048",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1500
            }
        ]
    },
    {
        "product_id": "K-6049",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-6050",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-5047",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1500
            }
        ]
    },
    {
        "product_id": "K-5267",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-1326",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-1149",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-947",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-6402",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 61
            }
        ]
    },
    {
        "product_id": "K-6296",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 200
            }
        ]
    },
    {
        "product_id": "K-6297",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 64
            }
        ]
    },
    {
        "product_id": "K-6298",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 45
            }
        ]
    },
    {
        "product_id": "K-5474",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-975",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 55
            }
        ]
    },
    {
        "product_id": "K-5347",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 199
            }
        ]
    },
    {
        "product_id": "K-976",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 138
            }
        ]
    },
    {
        "product_id": "K-977",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-978",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 62
            }
        ]
    },
    {
        "product_id": "K-979",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 60
            }
        ]
    },
    {
        "product_id": "K-6637",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 68
            }
        ]
    },
    {
        "product_id": "K-980",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 90
            }
        ]
    },
    {
        "product_id": "K-981",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 75
            }
        ]
    },
    {
        "product_id": "K-5325",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 95
            }
        ]
    },
    {
        "product_id": "K-1166",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 60
            }
        ]
    },
    {
        "product_id": "K-5284",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 40
            }
        ]
    },
    {
        "product_id": "K-982",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 42
            }
        ]
    },
    {
        "product_id": "K-983",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 15
            }
        ]
    },
    {
        "product_id": "K-5912",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 198
            }
        ]
    },
    {
        "product_id": "K-984",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 62
            }
        ]
    },
    {
        "product_id": "K-985",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 12
            }
        ]
    },
    {
        "product_id": "K-1107",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 75
            }
        ]
    },
    {
        "product_id": "K-1108",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-1109",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 13
            }
        ]
    },
    {
        "product_id": "K-1110",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 69
            }
        ]
    },
    {
        "product_id": "K-1115",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-1116",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1070
            }
        ]
    },
    {
        "product_id": "K-6476",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-1117",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 421
            }
        ]
    },
    {
        "product_id": "K-1118",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 400
            }
        ]
    },
    {
        "product_id": "K-10527",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 25
            }
        ]
    },
    {
        "product_id": "K-6390",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6
            }
        ]
    },
    {
        "product_id": "K-1300",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 28
            }
        ]
    },
    {
        "product_id": "K-1301",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-1303",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1810
            }
        ]
    },
    {
        "product_id": "K-5443",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 499
            }
        ]
    },
    {
        "product_id": "K-5764",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 74
            }
        ]
    },
    {
        "product_id": "K-6618",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 165
            }
        ]
    },
    {
        "product_id": "K-881",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-1314",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-1315",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1121
            }
        ]
    },
    {
        "product_id": "K-1316",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 127
            }
        ]
    },
    {
        "product_id": "K-1317",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-1318",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-5193",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1058
            }
        ]
    },
    {
        "product_id": "K-5179",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 367
            }
        ]
    },
    {
        "product_id": "K-10532",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1242
            }
        ]
    },
    {
        "product_id": "K-5247",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 235
            }
        ]
    },
    {
        "product_id": "K-6130",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5001",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 510
            }
        ]
    },
    {
        "product_id": "K-1170",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1020
            }
        ]
    },
    {
        "product_id": "K-1171",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-1172",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1684
            }
        ]
    },
    {
        "product_id": "K-6633",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1101
            }
        ]
    },
    {
        "product_id": "K-5858",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3078
            }
        ]
    },
    {
        "product_id": "K-5007",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3500
            }
        ]
    },
    {
        "product_id": "K-5009",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1118
            }
        ]
    },
    {
        "product_id": "K-5010",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-5011",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 9
            }
        ]
    },
    {
        "product_id": "K-6389",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 80
            }
        ]
    },
    {
        "product_id": "K-5060",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 124
            }
        ]
    },
    {
        "product_id": "K-5815",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 34
            }
        ]
    },
    {
        "product_id": "K-5816",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 42
            }
        ]
    },
    {
        "product_id": "K-5817",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 58
            }
        ]
    },
    {
        "product_id": "K-5014",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-6643",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 45
            }
        ]
    },
    {
        "product_id": "K-865",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6
            }
        ]
    },
    {
        "product_id": "K-866",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 96
            }
        ]
    },
    {
        "product_id": "K-5173",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 180
            }
        ]
    },
    {
        "product_id": "K-6326",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-6327",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-6328",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 35
            }
        ]
    },
    {
        "product_id": "K-5175",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 80
            }
        ]
    },
    {
        "product_id": "K-6668",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 499
            }
        ]
    },
    {
        "product_id": "K-5097",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 148
            }
        ]
    },
    {
        "product_id": "K-5098",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 148
            }
        ]
    },
    {
        "product_id": "K-5878",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 172
            }
        ]
    },
    {
        "product_id": "K-5180",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 20
            }
        ]
    },
    {
        "product_id": "K-5181",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-5182",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-5183",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-5184",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-5971",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-6300",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 155
            }
        ]
    },
    {
        "product_id": "K-6301",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 155
            }
        ]
    },
    {
        "product_id": "K-6302",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 155
            }
        ]
    },
    {
        "product_id": "K-5358",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 208
            }
        ]
    },
    {
        "product_id": "K-5359",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 208
            }
        ]
    },
    {
        "product_id": "K-5360",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 208
            }
        ]
    },
    {
        "product_id": "K-5361",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1100
            }
        ]
    },
    {
        "product_id": "K-5401",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 315
            }
        ]
    },
    {
        "product_id": "K-5402",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 315
            }
        ]
    },
    {
        "product_id": "K-5403",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 315
            }
        ]
    },
    {
        "product_id": "K-5404",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 286
            }
        ]
    },
    {
        "product_id": "K-5658",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 286
            }
        ]
    },
    {
        "product_id": "K-5405",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 286
            }
        ]
    },
    {
        "product_id": "K-5406",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 286
            }
        ]
    },
    {
        "product_id": "K-5425",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1585
            }
        ]
    },
    {
        "product_id": "K-6669",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1585
            }
        ]
    },
    {
        "product_id": "K-5454",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 458
            }
        ]
    },
    {
        "product_id": "K-5455",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 805
            }
        ]
    },
    {
        "product_id": "K-5456",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 805
            }
        ]
    },
    {
        "product_id": "K-1159",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 805
            }
        ]
    },
    {
        "product_id": "K-5803",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 805
            }
        ]
    },
    {
        "product_id": "K-5531",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 805
            }
        ]
    },
    {
        "product_id": "K-5532",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 805
            }
        ]
    },
    {
        "product_id": "K-5831",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 805
            }
        ]
    },
    {
        "product_id": "K-6304",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 805
            }
        ]
    },
    {
        "product_id": "K-6305",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 458
            }
        ]
    },
    {
        "product_id": "K-6306",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 458
            }
        ]
    },
    {
        "product_id": "K-6293",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 926
            }
        ]
    },
    {
        "product_id": "K-6294",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 926
            }
        ]
    },
    {
        "product_id": "K-5533",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 926
            }
        ]
    },
    {
        "product_id": "K-5534",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 99
            }
        ]
    },
    {
        "product_id": "K-5535",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 173
            }
        ]
    },
    {
        "product_id": "K-5541",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 173
            }
        ]
    },
    {
        "product_id": "K-5542",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 926
            }
        ]
    },
    {
        "product_id": "K-5445",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 131
            }
        ]
    },
    {
        "product_id": "K-5767",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 131
            }
        ]
    },
    {
        "product_id": "K-5768",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 131
            }
        ]
    },
    {
        "product_id": "K-5688",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 275
            }
        ]
    },
    {
        "product_id": "K-5602",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 275
            }
        ]
    },
    {
        "product_id": "K-5603",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 275
            }
        ]
    },
    {
        "product_id": "K-5604",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2
            }
        ]
    },
    {
        "product_id": "K-5605",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 29
            }
        ]
    },
    {
        "product_id": "K-5606",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 29
            }
        ]
    },
    {
        "product_id": "K-5607",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 29
            }
        ]
    },
    {
        "product_id": "K-5649",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 29
            }
        ]
    },
    {
        "product_id": "K-6660",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 996
            }
        ]
    },
    {
        "product_id": "K-5650",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 996
            }
        ]
    },
    {
        "product_id": "K-5651",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 996
            }
        ]
    },
    {
        "product_id": "K-5660",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 8
            }
        ]
    },
    {
        "product_id": "K-5669",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 282
            }
        ]
    },
    {
        "product_id": "K-6706",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 282
            }
        ]
    },
    {
        "product_id": "K-5670",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 282
            }
        ]
    },
    {
        "product_id": "K-5671",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 282
            }
        ]
    },
    {
        "product_id": "K-5672",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 79
            }
        ]
    },
    {
        "product_id": "K-5673",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 751
            }
        ]
    },
    {
        "product_id": "K-5674",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 751
            }
        ]
    },
    {
        "product_id": "K-6308",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 751
            }
        ]
    },
    {
        "product_id": "K-6309",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 195
            }
        ]
    },
    {
        "product_id": "K-6310",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 195
            }
        ]
    },
    {
        "product_id": "K-6311",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 195
            }
        ]
    },
    {
        "product_id": "K-5676",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 195
            }
        ]
    },
    {
        "product_id": "K-5677",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-5678",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-5679",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-6282",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-5680",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-5681",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 732
            }
        ]
    },
    {
        "product_id": "K-5726",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 58
            }
        ]
    },
    {
        "product_id": "K-5727",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 58
            }
        ]
    },
    {
        "product_id": "K-6662",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 58
            }
        ]
    },
    {
        "product_id": "K-5932",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 170
            }
        ]
    },
    {
        "product_id": "K-6232",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 301
            }
        ]
    },
    {
        "product_id": "K-6248",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 301
            }
        ]
    },
    {
        "product_id": "K-6249",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 301
            }
        ]
    },
    {
        "product_id": "K-6233",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 301
            }
        ]
    },
    {
        "product_id": "K-6262",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 301
            }
        ]
    },
    {
        "product_id": "K-6263",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 301
            }
        ]
    },
    {
        "product_id": "K-6264",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 301
            }
        ]
    },
    {
        "product_id": "K-6265",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 540
            }
        ]
    },
    {
        "product_id": "K-6559",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-6644",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-6561",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-6574",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-6584",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-6583",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-433",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-434",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2
            }
        ]
    },
    {
        "product_id": "K-435",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-436",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-437",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 331
            }
        ]
    },
    {
        "product_id": "K-438",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 331
            }
        ]
    },
    {
        "product_id": "K-439",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 331
            }
        ]
    },
    {
        "product_id": "K-1246",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 331
            }
        ]
    },
    {
        "product_id": "K-443",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 800
            }
        ]
    },
    {
        "product_id": "K-10506",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 756
            }
        ]
    },
    {
        "product_id": "K-444",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 756
            }
        ]
    },
    {
        "product_id": "K-445",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 756
            }
        ]
    },
    {
        "product_id": "K-446",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 756
            }
        ]
    },
    {
        "product_id": "K-447",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 756
            }
        ]
    },
    {
        "product_id": "K-448",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-449",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 655
            }
        ]
    },
    {
        "product_id": "K-5357",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 655
            }
        ]
    },
    {
        "product_id": "K-5882",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 655
            }
        ]
    },
    {
        "product_id": "K-5330",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 655
            }
        ]
    },
    {
        "product_id": "K-458",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 248
            }
        ]
    },
    {
        "product_id": "K-459",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 248
            }
        ]
    },
    {
        "product_id": "K-460",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 248
            }
        ]
    },
    {
        "product_id": "K-461",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 248
            }
        ]
    },
    {
        "product_id": "K-6579",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 629
            }
        ]
    },
    {
        "product_id": "K-462",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 629
            }
        ]
    },
    {
        "product_id": "K-463",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 629
            }
        ]
    },
    {
        "product_id": "K-464",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 629
            }
        ]
    },
    {
        "product_id": "K-465",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 133
            }
        ]
    },
    {
        "product_id": "K-466",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 133
            }
        ]
    },
    {
        "product_id": "K-467",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 300
            }
        ]
    },
    {
        "product_id": "K-468",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2581
            }
        ]
    },
    {
        "product_id": "K-469",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 597
            }
        ]
    },
    {
        "product_id": "K-470",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 597
            }
        ]
    },
    {
        "product_id": "K-471",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 597
            }
        ]
    },
    {
        "product_id": "K-472",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 597
            }
        ]
    },
    {
        "product_id": "K-473",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-6038",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6197
            }
        ]
    },
    {
        "product_id": "K-6577",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6197
            }
        ]
    },
    {
        "product_id": "K-474",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6197
            }
        ]
    },
    {
        "product_id": "K-478",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1015
            }
        ]
    },
    {
        "product_id": "K-479",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1015
            }
        ]
    },
    {
        "product_id": "K-480",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6197
            }
        ]
    },
    {
        "product_id": "K-481",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6197
            }
        ]
    },
    {
        "product_id": "K-6368",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1015
            }
        ]
    },
    {
        "product_id": "K-6356",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1411
            }
        ]
    },
    {
        "product_id": "K-5641",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1411
            }
        ]
    },
    {
        "product_id": "K-5891",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1900
            }
        ]
    },
    {
        "product_id": "K-5642",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 139
            }
        ]
    },
    {
        "product_id": "K-6170",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5327",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 527
            }
        ]
    },
    {
        "product_id": "K-489",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 161
            }
        ]
    },
    {
        "product_id": "K-490",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 161
            }
        ]
    },
    {
        "product_id": "K-491",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 161
            }
        ]
    },
    {
        "product_id": "K-492",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 161
            }
        ]
    },
    {
        "product_id": "K-493",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 161
            }
        ]
    },
    {
        "product_id": "K-494",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 161
            }
        ]
    },
    {
        "product_id": "K-5821",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 161
            }
        ]
    },
    {
        "product_id": "K-6689",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 161
            }
        ]
    },
    {
        "product_id": "K-5822",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 32
            }
        ]
    },
    {
        "product_id": "K-1137",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 587
            }
        ]
    },
    {
        "product_id": "K-6219",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 587
            }
        ]
    },
    {
        "product_id": "K-1186",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 587
            }
        ]
    },
    {
        "product_id": "K-5073",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 587
            }
        ]
    },
    {
        "product_id": "K-495",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 587
            }
        ]
    },
    {
        "product_id": "K-496",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 587
            }
        ]
    },
    {
        "product_id": "K-497",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 587
            }
        ]
    },
    {
        "product_id": "K-498",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 587
            }
        ]
    },
    {
        "product_id": "K-499",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 587
            }
        ]
    },
    {
        "product_id": "K-500",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 111
            }
        ]
    },
    {
        "product_id": "K-501",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-507",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-6216",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-508",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-509",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-510",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 53
            }
        ]
    },
    {
        "product_id": "K-513",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 41
            }
        ]
    },
    {
        "product_id": "K-1207",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 479
            }
        ]
    },
    {
        "product_id": "K-1139",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 325
            }
        ]
    },
    {
        "product_id": "K-515",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1222
            }
        ]
    },
    {
        "product_id": "K-516",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 372
            }
        ]
    },
    {
        "product_id": "K-517",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 372
            }
        ]
    },
    {
        "product_id": "K-518",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 372
            }
        ]
    },
    {
        "product_id": "K-519",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 372
            }
        ]
    },
    {
        "product_id": "K-1209",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 217
            }
        ]
    },
    {
        "product_id": "K-1210",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-1136",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 360
            }
        ]
    },
    {
        "product_id": "K-1138",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1007
            }
        ]
    },
    {
        "product_id": "K-6707",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 121
            }
        ]
    },
    {
        "product_id": "K-6386",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 772
            }
        ]
    },
    {
        "product_id": "K-6165",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 772
            }
        ]
    },
    {
        "product_id": "K-6023",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 772
            }
        ]
    },
    {
        "product_id": "K-5638",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 772
            }
        ]
    },
    {
        "product_id": "K-5639",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 772
            }
        ]
    },
    {
        "product_id": "K-5640",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 772
            }
        ]
    },
    {
        "product_id": "K-5171",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1129
            }
        ]
    },
    {
        "product_id": "K-10516",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 460
            }
        ]
    },
    {
        "product_id": "K-524",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 338
            }
        ]
    },
    {
        "product_id": "K-1247",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 338
            }
        ]
    },
    {
        "product_id": "K-5298",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 338
            }
        ]
    },
    {
        "product_id": "K-5849",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 338
            }
        ]
    },
    {
        "product_id": "K-1188",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 338
            }
        ]
    },
    {
        "product_id": "K-6700",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 338
            }
        ]
    },
    {
        "product_id": "K-5029",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 338
            }
        ]
    },
    {
        "product_id": "K-525",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 338
            }
        ]
    },
    {
        "product_id": "K-1304",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1372
            }
        ]
    },
    {
        "product_id": "K-527",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2301
            }
        ]
    },
    {
        "product_id": "K-528",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 39
            }
        ]
    },
    {
        "product_id": "K-529",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 39
            }
        ]
    },
    {
        "product_id": "K-530",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 39
            }
        ]
    },
    {
        "product_id": "K-5037",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 39
            }
        ]
    },
    {
        "product_id": "K-1181",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 39
            }
        ]
    },
    {
        "product_id": "K-5889",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2301
            }
        ]
    },
    {
        "product_id": "K-6708",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2301
            }
        ]
    },
    {
        "product_id": "K-6274",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2301
            }
        ]
    },
    {
        "product_id": "K-533",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2301
            }
        ]
    },
    {
        "product_id": "K-534",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1432
            }
        ]
    },
    {
        "product_id": "K-535",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 136
            }
        ]
    },
    {
        "product_id": "K-537",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 11
            }
        ]
    },
    {
        "product_id": "K-538",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1432
            }
        ]
    },
    {
        "product_id": "K-539",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-1211",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 253
            }
        ]
    },
    {
        "product_id": "K-1215",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 253
            }
        ]
    },
    {
        "product_id": "K-5087",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 253
            }
        ]
    },
    {
        "product_id": "K-6384",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 253
            }
        ]
    },
    {
        "product_id": "K-540",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 253
            }
        ]
    },
    {
        "product_id": "K-541",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 253
            }
        ]
    },
    {
        "product_id": "K-542",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 253
            }
        ]
    },
    {
        "product_id": "K-543",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 253
            }
        ]
    },
    {
        "product_id": "K-5277",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-5278",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1003
            }
        ]
    },
    {
        "product_id": "K-544",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1059
            }
        ]
    },
    {
        "product_id": "K-5782",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1825
            }
        ]
    },
    {
        "product_id": "K-5784",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 605
            }
        ]
    },
    {
        "product_id": "K-1190",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 605
            }
        ]
    },
    {
        "product_id": "K-1153",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 605
            }
        ]
    },
    {
        "product_id": "K-5861",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 605
            }
        ]
    },
    {
        "product_id": "K-6218",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 605
            }
        ]
    },
    {
        "product_id": "K-6479",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 605
            }
        ]
    },
    {
        "product_id": "K-6499",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 605
            }
        ]
    },
    {
        "product_id": "K-547",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 400
            }
        ]
    },
    {
        "product_id": "K-1135",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 576
            }
        ]
    },
    {
        "product_id": "K-5019",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 458
            }
        ]
    },
    {
        "product_id": "K-548",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 458
            }
        ]
    },
    {
        "product_id": "K-549",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 458
            }
        ]
    },
    {
        "product_id": "K-550",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 458
            }
        ]
    },
    {
        "product_id": "K-551",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 458
            }
        ]
    },
    {
        "product_id": "K-6349",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 576
            }
        ]
    },
    {
        "product_id": "K-5251",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 576
            }
        ]
    },
    {
        "product_id": "K-450",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6385",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2124
            }
        ]
    },
    {
        "product_id": "K-5323",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1029
            }
        ]
    },
    {
        "product_id": "K-553",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2124
            }
        ]
    },
    {
        "product_id": "K-554",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1029
            }
        ]
    },
    {
        "product_id": "K-555",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1029
            }
        ]
    },
    {
        "product_id": "K-556",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 192
            }
        ]
    },
    {
        "product_id": "K-558",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 520
            }
        ]
    },
    {
        "product_id": "K-5752",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1022
            }
        ]
    },
    {
        "product_id": "K-560",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1022
            }
        ]
    },
    {
        "product_id": "K-561",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1022
            }
        ]
    },
    {
        "product_id": "K-562",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1022
            }
        ]
    },
    {
        "product_id": "K-563",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 8
            }
        ]
    },
    {
        "product_id": "K-564",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 8
            }
        ]
    },
    {
        "product_id": "K-5476",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 8
            }
        ]
    },
    {
        "product_id": "K-6087",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 15
            }
        ]
    },
    {
        "product_id": "K-5072",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-1189",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-567",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 229
            }
        ]
    },
    {
        "product_id": "K-568",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 229
            }
        ]
    },
    {
        "product_id": "K-5199",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 229
            }
        ]
    },
    {
        "product_id": "K-5867",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6076",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6405",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5690",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6621",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6622",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6623",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-577",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-578",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-579",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-580",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-581",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-582",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6148",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5998",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6687",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6688",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5687",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6619",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 110
            }
        ]
    },
    {
        "product_id": "K-6620",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 110
            }
        ]
    },
    {
        "product_id": "K-6500",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 110
            }
        ]
    },
    {
        "product_id": "K-6686",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 110
            }
        ]
    },
    {
        "product_id": "K-1338",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 110
            }
        ]
    },
    {
        "product_id": "K-1339",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-1340",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-1341",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-1342",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-1343",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 110
            }
        ]
    },
    {
        "product_id": "K-1344",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 11
            }
        ]
    },
    {
        "product_id": "K-1380",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2054
            }
        ]
    },
    {
        "product_id": "K-1381",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2054
            }
        ]
    },
    {
        "product_id": "K-1382",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2054
            }
        ]
    },
    {
        "product_id": "K-1383",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2054
            }
        ]
    },
    {
        "product_id": "K-1384",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2054
            }
        ]
    },
    {
        "product_id": "K-1385",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2938
            }
        ]
    },
    {
        "product_id": "K-1386",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1007
            }
        ]
    },
    {
        "product_id": "K-1387",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2938
            }
        ]
    },
    {
        "product_id": "K-1389",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 400
            }
        ]
    },
    {
        "product_id": "K-1391",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 537
            }
        ]
    },
    {
        "product_id": "K-1392",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 537
            }
        ]
    },
    {
        "product_id": "K-1394",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 537
            }
        ]
    },
    {
        "product_id": "K-5824",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-5634",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "NOSKU",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-5635",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-5636",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 204
            }
        ]
    },
    {
        "product_id": "K-6159",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 204
            }
        ]
    },
    {
        "product_id": "K-6160",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 204
            }
        ]
    },
    {
        "product_id": "K-6161",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 204
            }
        ]
    },
    {
        "product_id": "K-5637",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1201
            }
        ]
    },
    {
        "product_id": "K-1280",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1201
            }
        ]
    },
    {
        "product_id": "K-6070",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1201
            }
        ]
    },
    {
        "product_id": "K-5810",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1201
            }
        ]
    },
    {
        "product_id": "K-5811",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 220
            }
        ]
    },
    {
        "product_id": "K-5812",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 220
            }
        ]
    },
    {
        "product_id": "K-5813",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 220
            }
        ]
    },
    {
        "product_id": "K-5814",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 220
            }
        ]
    },
    {
        "product_id": "K-1272",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3038
            }
        ]
    },
    {
        "product_id": "K-5289",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3038
            }
        ]
    },
    {
        "product_id": "K-5117",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3038
            }
        ]
    },
    {
        "product_id": "K-6489",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3038
            }
        ]
    },
    {
        "product_id": "K-6641",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3038
            }
        ]
    },
    {
        "product_id": "K-6077",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3038
            }
        ]
    },
    {
        "product_id": "K-5119",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 601
            }
        ]
    },
    {
        "product_id": "K-5121",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 601
            }
        ]
    },
    {
        "product_id": "K-5122",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 601
            }
        ]
    },
    {
        "product_id": "K-5123",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 601
            }
        ]
    },
    {
        "product_id": "K-5120",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 601
            }
        ]
    },
    {
        "product_id": "K-5125",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 507
            }
        ]
    },
    {
        "product_id": "K-5126",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 507
            }
        ]
    },
    {
        "product_id": "K-5142",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 507
            }
        ]
    },
    {
        "product_id": "K-5143",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 507
            }
        ]
    },
    {
        "product_id": "K-5144",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 507
            }
        ]
    },
    {
        "product_id": "K-5145",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 539
            }
        ]
    },
    {
        "product_id": "K-5146",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-5147",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-5148",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 304
            }
        ]
    },
    {
        "product_id": "K-5149",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 304
            }
        ]
    },
    {
        "product_id": "K-5151",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 304
            }
        ]
    },
    {
        "product_id": "K-5152",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 304
            }
        ]
    },
    {
        "product_id": "K-5153",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 304
            }
        ]
    },
    {
        "product_id": "K-5154",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 304
            }
        ]
    },
    {
        "product_id": "K-5255",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 536
            }
        ]
    },
    {
        "product_id": "K-5256",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 536
            }
        ]
    },
    {
        "product_id": "K-5257",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 536
            }
        ]
    },
    {
        "product_id": "K-5258",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 536
            }
        ]
    },
    {
        "product_id": "K-6401",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-5466",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-5468",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6
            }
        ]
    },
    {
        "product_id": "K-5469",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 200
            }
        ]
    },
    {
        "product_id": "K-5755",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 200
            }
        ]
    },
    {
        "product_id": "K-5568",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1008
            }
        ]
    },
    {
        "product_id": "K-5569",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 997
            }
        ]
    },
    {
        "product_id": "K-5570",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 522
            }
        ]
    },
    {
        "product_id": "K-5571",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 522
            }
        ]
    },
    {
        "product_id": "K-5572",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 38
            }
        ]
    },
    {
        "product_id": "K-5573",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 38
            }
        ]
    },
    {
        "product_id": "K-6434",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 38
            }
        ]
    },
    {
        "product_id": "K-5666",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1019
            }
        ]
    },
    {
        "product_id": "K-5667",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 783
            }
        ]
    },
    {
        "product_id": "K-6158",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 783
            }
        ]
    },
    {
        "product_id": "K-6640",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 783
            }
        ]
    },
    {
        "product_id": "K-6011",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 783
            }
        ]
    },
    {
        "product_id": "K-6490",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 783
            }
        ]
    },
    {
        "product_id": "K-6017",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 783
            }
        ]
    },
    {
        "product_id": "K-6352",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-6353",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 194
            }
        ]
    },
    {
        "product_id": "K-6354",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 194
            }
        ]
    },
    {
        "product_id": "K-6357",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 194
            }
        ]
    },
    {
        "product_id": "K-6359",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 194
            }
        ]
    },
    {
        "product_id": "K-6437",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 194
            }
        ]
    },
    {
        "product_id": "K-6441",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-6511",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6
            }
        ]
    },
    {
        "product_id": "K-6512",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6
            }
        ]
    },
    {
        "product_id": "K-6513",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6
            }
        ]
    },
    {
        "product_id": "K-6514",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6
            }
        ]
    },
    {
        "product_id": "K-6517",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6
            }
        ]
    },
    {
        "product_id": "K-6518",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6
            }
        ]
    },
    {
        "product_id": "K-6544",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6545",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6546",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-6547",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 324
            }
        ]
    },
    {
        "product_id": "K-6549",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1044
            }
        ]
    },
    {
        "product_id": "K-6550",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 324
            }
        ]
    },
    {
        "product_id": "K-6551",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 324
            }
        ]
    },
    {
        "product_id": "K-6552",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 324
            }
        ]
    },
    {
        "product_id": "K-6607",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 324
            }
        ]
    },
    {
        "product_id": "K-6666",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 324
            }
        ]
    },
    {
        "product_id": "K-6667",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 15
            }
        ]
    },
    {
        "product_id": "K-583",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 293
            }
        ]
    },
    {
        "product_id": "K-584",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 293
            }
        ]
    },
    {
        "product_id": "K-585",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 293
            }
        ]
    },
    {
        "product_id": "K-586",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 293
            }
        ]
    },
    {
        "product_id": "K-587",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 293
            }
        ]
    },
    {
        "product_id": "K-5262",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 293
            }
        ]
    },
    {
        "product_id": "K-5226",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 293
            }
        ]
    },
    {
        "product_id": "K-5021",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 293
            }
        ]
    },
    {
        "product_id": "K-599",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 293
            }
        ]
    },
    {
        "product_id": "K-600",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 293
            }
        ]
    },
    {
        "product_id": "K-601",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 80
            }
        ]
    },
    {
        "product_id": "K-602",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 998
            }
        ]
    },
    {
        "product_id": "K-603",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 998
            }
        ]
    },
    {
        "product_id": "K-604",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 998
            }
        ]
    },
    {
        "product_id": "K-605",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 998
            }
        ]
    },
    {
        "product_id": "K-606",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 998
            }
        ]
    },
    {
        "product_id": "K-607",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 998
            }
        ]
    },
    {
        "product_id": "K-5022",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-994",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-995",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-996",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-997",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-1306",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-1307",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-5919",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-6124",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 410
            }
        ]
    },
    {
        "product_id": "K-612",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 149
            }
        ]
    },
    {
        "product_id": "K-613",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 149
            }
        ]
    },
    {
        "product_id": "K-614",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 149
            }
        ]
    },
    {
        "product_id": "K-615",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 149
            }
        ]
    },
    {
        "product_id": "K-616",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 149
            }
        ]
    },
    {
        "product_id": "K-617",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 149
            }
        ]
    },
    {
        "product_id": "K-618",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-5294",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-5332",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-6074",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-619",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-620",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-621",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-622",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-624",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-625",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 20
            }
        ]
    },
    {
        "product_id": "K-6090",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 49
            }
        ]
    },
    {
        "product_id": "K-633",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 115
            }
        ]
    },
    {
        "product_id": "K-634",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 6
            }
        ]
    },
    {
        "product_id": "K-635",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 25
            }
        ]
    },
    {
        "product_id": "K-640",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-641",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-1127",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-642",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-1206",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-643",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 150
            }
        ]
    },
    {
        "product_id": "K-644",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2641
            }
        ]
    },
    {
        "product_id": "K-645",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2641
            }
        ]
    },
    {
        "product_id": "K-6340",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2641
            }
        ]
    },
    {
        "product_id": "K-653",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2641
            }
        ]
    },
    {
        "product_id": "K-654",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2641
            }
        ]
    },
    {
        "product_id": "K-655",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2641
            }
        ]
    },
    {
        "product_id": "K-656",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-657",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-658",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-659",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-5868",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-660",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-661",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 40
            }
        ]
    },
    {
        "product_id": "K-665",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2000
            }
        ]
    },
    {
        "product_id": "K-666",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2000
            }
        ]
    },
    {
        "product_id": "K-667",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2000
            }
        ]
    },
    {
        "product_id": "K-669",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2000
            }
        ]
    },
    {
        "product_id": "K-671",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-673",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 25
            }
        ]
    },
    {
        "product_id": "K-5150",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-6019",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-5823",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-967",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-968",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1
            }
        ]
    },
    {
        "product_id": "K-969",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 17
            }
        ]
    },
    {
        "product_id": "K-970",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1001
            }
        ]
    },
    {
        "product_id": "K-971",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 9
            }
        ]
    },
    {
        "product_id": "K-974",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 70
            }
        ]
    },
    {
        "product_id": "K-6498",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 998
            }
        ]
    },
    {
        "product_id": "K-6324",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-1294",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-1295",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-1296",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 49
            }
        ]
    },
    {
        "product_id": "K-1297",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 49
            }
        ]
    },
    {
        "product_id": "K-5790",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6168",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6169",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5127",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5128",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1008
            }
        ]
    },
    {
        "product_id": "K-5130",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 930
            }
        ]
    },
    {
        "product_id": "K-5249",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6331",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6332",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6334",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6335",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5107",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1009
            }
        ]
    },
    {
        "product_id": "K-5108",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5110",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5111",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5050",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5051",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5918",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5613",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5615",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5581",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5646",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 20
            }
        ]
    },
    {
        "product_id": "K-296",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6127",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6230",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6231",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6345",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6346",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-6348",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-675",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5356",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-677",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-1167",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-684",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-685",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-686",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-687",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1040
            }
        ]
    },
    {
        "product_id": "K-688",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-690",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5840",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-5457",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-691",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-693",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-694",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-695",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-696",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-697",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-699",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-700",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-702",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-703",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-705",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-706",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-708",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-709",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-711",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-712",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-714",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-715",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-717",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 25
            }
        ]
    },
    {
        "product_id": "K-718",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-720",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-721",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-723",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-724",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-725",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-726",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-728",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-729",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-731",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-732",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-733",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 49
            }
        ]
    },
    {
        "product_id": "K-734",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 49
            }
        ]
    },
    {
        "product_id": "K-735",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 49
            }
        ]
    },
    {
        "product_id": "K-736",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 49
            }
        ]
    },
    {
        "product_id": "K-737",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2
            }
        ]
    },
    {
        "product_id": "K-739",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-740",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-742",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-743",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-745",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-746",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-748",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-749",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-751",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-752",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-754",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-755",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-757",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-758",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-760",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-761",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-763",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-764",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-766",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-767",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-769",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-770",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-772",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-773",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-782",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1060
            }
        ]
    },
    {
        "product_id": "K-783",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-784",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 996
            }
        ]
    },
    {
        "product_id": "K-785",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1005
            }
        ]
    },
    {
        "product_id": "K-786",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-787",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 10
            }
        ]
    },
    {
        "product_id": "K-788",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 743
            }
        ]
    },
    {
        "product_id": "K-789",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 635
            }
        ]
    },
    {
        "product_id": "K-791",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-792",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-793",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1059
            }
        ]
    },
    {
        "product_id": "K-794",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 30
            }
        ]
    },
    {
        "product_id": "K-795",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 43
            }
        ]
    },
    {
        "product_id": "K-796",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 43
            }
        ]
    },
    {
        "product_id": "K-797",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 43
            }
        ]
    },
    {
        "product_id": "K-798",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-799",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 5
            }
        ]
    },
    {
        "product_id": "K-800",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 5
            }
        ]
    },
    {
        "product_id": "K-801",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-802",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-803",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-805",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 21
            }
        ]
    },
    {
        "product_id": "K-5766",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 20
            }
        ]
    },
    {
        "product_id": "K-807",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 22
            }
        ]
    },
    {
        "product_id": "K-808",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1199
            }
        ]
    },
    {
        "product_id": "K-810",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    },
    {
        "product_id": "K-811",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 250
            }
        ]
    },
    {
        "product_id": "K-812",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-813",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1028
            }
        ]
    },
    {
        "product_id": "K-815",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1400
            }
        ]
    },
    {
        "product_id": "K-816",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 990
            }
        ]
    },
    {
        "product_id": "K-817",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1000
            }
        ]
    },
    {
        "product_id": "K-818",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1435
            }
        ]
    },
    {
        "product_id": "K-819",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 22
            }
        ]
    },
    {
        "product_id": "K-820",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-821",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 160
            }
        ]
    },
    {
        "product_id": "K-822",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 200
            }
        ]
    },
    {
        "product_id": "K-823",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 200
            }
        ]
    },
    {
        "product_id": "K-828",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 200
            }
        ]
    },
    {
        "product_id": "K-829",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-830",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2000
            }
        ]
    },
    {
        "product_id": "K-831",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 83
            }
        ]
    },
    {
        "product_id": "K-832",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3439
            }
        ]
    },
    {
        "product_id": "K-833",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 5876
            }
        ]
    },
    {
        "product_id": "K-834",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3256
            }
        ]
    },
    {
        "product_id": "K-835",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-836",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 200
            }
        ]
    },
    {
        "product_id": "K-837",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 160
            }
        ]
    },
    {
        "product_id": "K-838",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3000
            }
        ]
    },
    {
        "product_id": "K-839",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 300
            }
        ]
    },
    {
        "product_id": "K-840",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1404
            }
        ]
    },
    {
        "product_id": "K-841",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3248
            }
        ]
    },
    {
        "product_id": "K-842",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 300
            }
        ]
    },
    {
        "product_id": "K-844",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4499
            }
        ]
    },
    {
        "product_id": "K-845",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 98
            }
        ]
    },
    {
        "product_id": "K-846",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 50
            }
        ]
    },
    {
        "product_id": "K-847",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1722
            }
        ]
    },
    {
        "product_id": "K-5018",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 20
            }
        ]
    },
    {
        "product_id": "K-5765",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 450
            }
        ]
    },
    {
        "product_id": "K-848",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-849",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 449
            }
        ]
    },
    {
        "product_id": "K-854",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-858",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 500
            }
        ]
    },
    {
        "product_id": "K-859",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-861",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 80
            }
        ]
    },
    {
        "product_id": "K-862",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-5397",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-863",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 100
            }
        ]
    },
    {
        "product_id": "K-5349",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 25
            }
        ]
    },
    {
        "product_id": "K-864",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 40
            }
        ]
    },
    {
        "product_id": "K-988",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 502
            }
        ]
    },
    {
        "product_id": "K-10521",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 502
            }
        ]
    },
    {
        "product_id": "K-6026",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 2000
            }
        ]
    },
    {
        "product_id": "K-6058",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 675
            }
        ]
    },
    {
        "product_id": "K-5883",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 3447
            }
        ]
    },
    {
        "product_id": "K-5285",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 4
            }
        ]
    },
    {
        "product_id": "K-824",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 21
            }
        ]
    },
    {
        "product_id": "K-6092",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 20
            }
        ]
    },
    {
        "product_id": "K-6321",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 22
            }
        ]
    },
    {
        "product_id": "K-5242",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1199
            }
        ]
    },
    {
        "product_id": "K-5112",
        "subInventory": [
            {
                "warehouseId": "66fceb5163c6d5c106cfa809",
                "quantity": 1010
            }
        ]
    }
];




// data.products.forEach(async (product, index) => {
//     try {
//       const response = await axios.post(url, product, { headers });
  
//       if (response.status === 201) {
//         console.log("Success:", response.data);
//         console.log(`count ${index}: Successful`);
//       } else {
//         console.log("Failed:", response.status, response.statusText);
//       }
//     } catch (error) {
//       console.log("Error:", error.response ? error.response.status : error.message);
//     }
  
//   });



const sendProductsSequentially = async () => {
    for (let index = 0; index < data.length; index++) {
      const inventory = data[index];
      
      try {
        const response = await axios.post(url, inventory, { headers });
  
        if (response.status === 201) {
          console.log(`count ${index}: Successful`);
        } else {
          console.log("Failed:", response.status, response.statusText);
        }
      } catch (error) {
        console.log("Error:", error.response ? error.response.status : error.message);
      }
  
    }
  };
  
  sendProductsSequentially();
