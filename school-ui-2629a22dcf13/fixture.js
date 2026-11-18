export default {
  "source": "0d7597677a7f98fb9492f063c1028dd50e1645b3",
  "kind": "controlled-example",
  "note": "인간 Lv10 · 영혼력99 · 가루1000 · 첫 무기 · 고정 영혼 추출 · 반격 없는 과녁. 기존 beta 예시와 동일한 캐릭터라는 뜻은 아님.",
  "souls": [
    {
      "id": "ash_rat",
      "name": "굶주린 쥐",
      "grade": "일반"
    },
    {
      "id": "moth",
      "name": "등불 나방",
      "grade": "일반"
    },
    {
      "id": "stone_scab",
      "name": "돌 딱지",
      "grade": "일반"
    },
    {
      "id": "scale_keeper",
      "name": "저울 수호자",
      "grade": "정예"
    },
    {
      "id": "wind_wisp",
      "name": "바람 정령",
      "grade": "일반"
    }
  ],
  "options": [
    {
      "id": "stone_scab",
      "stats": {
        "힘": 5,
        "민첩": 2,
        "지혜": 2,
        "의지": 2,
        "감각": 4
      },
      "turns": [
        {
          "hit": 0,
          "used": {
            "id": "moth",
            "name": "인화"
          },
          "none": true
        },
        {
          "hit": 13,
          "used": {
            "id": "fuse_echo_guard",
            "name": "맞소리"
          },
          "none": false
        },
        {
          "hit": 14,
          "used": {
            "id": "fuse_split_cut",
            "name": "가름"
          },
          "none": false
        },
        {
          "hit": 13,
          "used": null,
          "none": false
        },
        {
          "hit": 13,
          "used": null,
          "none": false
        },
        {
          "hit": 13,
          "used": null,
          "none": false
        },
        {
          "hit": 22,
          "used": null,
          "none": false
        },
        {
          "hit": 13,
          "used": null,
          "none": false
        },
        {
          "hit": 13,
          "used": null,
          "none": false
        },
        {
          "hit": 13,
          "used": null,
          "none": false
        }
      ],
      "spread": {
        "min": 13,
        "mid": 13,
        "max": 22,
        "n": 9
      },
      "cost": 0,
      "diff": {
        "stats": [],
        "resoOpens": [],
        "resoShuts": [],
        "fusionOpens": [],
        "fusionShuts": [],
        "souls": {
          "in": [],
          "out": []
        },
        "same": true
      }
    },
    {
      "id": "scale_keeper",
      "stats": {
        "힘": 6,
        "민첩": 2,
        "지혜": 1,
        "의지": 7,
        "감각": 5
      },
      "turns": [
        {
          "hit": 0,
          "used": {
            "id": "moth",
            "name": "인화"
          },
          "none": true
        },
        {
          "hit": 9,
          "used": {
            "id": "fuse_devour_latch",
            "name": "삼킨 빗장"
          },
          "none": false
        },
        {
          "hit": 0,
          "used": {
            "id": "fuse_seen_latch",
            "name": "틈빗장"
          },
          "none": true
        },
        {
          "hit": 14,
          "used": {
            "id": "fuse_split_cut",
            "name": "가름"
          },
          "none": false
        },
        {
          "hit": 0,
          "used": {
            "id": "fuse_tempered_eye",
            "name": "벼린 눈"
          },
          "none": true
        },
        {
          "hit": 22,
          "used": null,
          "none": false
        },
        {
          "hit": 13,
          "used": null,
          "none": false
        },
        {
          "hit": 13,
          "used": null,
          "none": false
        },
        {
          "hit": 13,
          "used": null,
          "none": false
        },
        {
          "hit": 13,
          "used": null,
          "none": false
        }
      ],
      "spread": {
        "min": 9,
        "mid": 13,
        "max": 22,
        "n": 7
      },
      "cost": 50,
      "diff": {
        "stats": [
          {
            "stat": "힘",
            "from": 5,
            "to": 6,
            "delta": 1
          },
          {
            "stat": "지혜",
            "from": 2,
            "to": 1,
            "delta": -1
          },
          {
            "stat": "의지",
            "from": 2,
            "to": 7,
            "delta": 5
          },
          {
            "stat": "감각",
            "from": 4,
            "to": 5,
            "delta": 1
          }
        ],
        "resoOpens": [
          "나눈 저울"
        ],
        "resoShuts": [],
        "fusionOpens": [
          "삼킨 빗장",
          "틈빗장",
          "벼린 눈"
        ],
        "fusionShuts": [
          "맞소리"
        ],
        "souls": {
          "in": [
            "scale_keeper"
          ],
          "out": [
            "stone_scab"
          ]
        },
        "same": false
      }
    },
    {
      "id": "wind_wisp",
      "stats": {
        "힘": 4,
        "민첩": 4,
        "지혜": 2,
        "의지": 0,
        "감각": 5
      },
      "turns": [
        {
          "hit": 16,
          "used": {
            "id": "ash_rat",
            "name": "갉기"
          },
          "none": false
        },
        {
          "hit": 0,
          "used": {
            "id": "moth",
            "name": "인화"
          },
          "none": true
        },
        {
          "hit": 17,
          "used": {
            "id": "wind_wisp",
            "name": "휘돌이"
          },
          "none": false
        },
        {
          "hit": 13,
          "used": {
            "id": "fuse_split_cut",
            "name": "가름"
          },
          "none": false
        },
        {
          "hit": 20,
          "used": null,
          "none": false
        },
        {
          "hit": 12,
          "used": null,
          "none": false
        },
        {
          "hit": 20,
          "used": null,
          "none": false
        },
        {
          "hit": 12,
          "used": null,
          "none": false
        },
        {
          "hit": 12,
          "used": null,
          "none": false
        },
        {
          "hit": 12,
          "used": null,
          "none": false
        }
      ],
      "spread": {
        "min": 12,
        "mid": 13,
        "max": 20,
        "n": 9
      },
      "cost": 50,
      "diff": {
        "stats": [
          {
            "stat": "힘",
            "from": 5,
            "to": 4,
            "delta": -1
          },
          {
            "stat": "민첩",
            "from": 2,
            "to": 4,
            "delta": 2
          },
          {
            "stat": "의지",
            "from": 2,
            "to": 0,
            "delta": -2
          },
          {
            "stat": "감각",
            "from": 4,
            "to": 5,
            "delta": 1
          }
        ],
        "resoOpens": [
          "들불",
          "재바람",
          "폭풍눈"
        ],
        "resoShuts": [],
        "fusionOpens": [],
        "fusionShuts": [
          "맞소리"
        ],
        "souls": {
          "in": [
            "wind_wisp"
          ],
          "out": [
            "stone_scab"
          ]
        },
        "same": false
      }
    }
  ]
};
