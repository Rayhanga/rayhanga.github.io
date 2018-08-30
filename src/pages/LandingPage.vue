<template>
    <v-layout row wrap>
        <v-flex text-xs-center xs12>
            <v-parallax 
                light
                alt="Blue Ocean"
                src="https://lh3.googleusercontent.com/RvpYwAixaLwLwnawKUVge6G8tEVMvyo6uUy2xgzoTtDnWe5cGMrr0xyThUlEJYeODqBcxKB9I9KjCD8QpXUNr2VobixYj7Sng7rfNiyFm4oprbQxxCw5o3iHW061v7pkvgAQatoRniDyJMEQF7391ATqjk9Fw2nxSwiiAOQ1gLAEkuEQDAJAB0OqUw1PN5j4ghXUk92IE736l1KdhVkOo2PBMVAXgM29Y95M_-ogrBt-QOZGJnP5SCbVt2Jsn4owMmMWbvJGmN5aZt2EaOBGCXmglDRv7ZtBuf3L7etUZtUg0RFUrLXSrrrC1td9tBSsD7pydwpUfUxzc1tT9EprbqTVRt5UUd5Pr9lYKJoHgHEDqLufd9DsPVIK-fgHHCG5r46QHfXf6W4vdUvDEaKLftmhzniAuJKlz7apO6zAsH7Mnw3Pr1yKQEAWMBBD3SGk00Xr8yS8mmh3mijFYCcU_bmxnVc7HV12BUCckffZPD1llXG536YgduvhcmthUMqIYNuPxo5hJuqxgHCNXa-uGqX2w9Rtyk-7PW6DyqKeBCLYY-7btDv4e4qOFON7K_9qWLPm--l_0brRdAA1QP9gHM_U0w5GOM5yNBR8VjyuvrsDv6cpNPFDqmNh5tGD6mk=w1275-h956-no"
            >
                <v-container fill-height fluid align-center>
                    <v-flex text-xs-center class="hidden-sm-and-down headline">
                        <h1 class="display-3 ">Little About Me</h1>
                        <br />
                        <p>Hello, my name is Rayhan Gusty Alif</p>
                        <p>I'm a College Student <i>(for now)</i> that came from Indonesia.</p>
                        <p>I have passion for music, technology, and game.</p>
                        <p>I'm also still learning how to develop a software or even to compose music.</p>
                        <br/>
                        <v-tooltip bottom>
                            <v-btn slot="activator" icon ripple @click.stop ="openDrawer">
                                <v-icon large>more_horiz</v-icon>
                            </v-btn>
                            <span>Click to Open Navigation Panel</span>
                        </v-tooltip>
                    </v-flex>

                    <!--Mobile View-->
                    <v-flex text-xs-center class="hidden-md-and-up headline">
                        <h1 class="display-2">Little About Me</h1>
                        <br />
                        <div class="body-1">
                            <p>Hello, my name is Rayhan Gusty Alif</p>
                            <p>I'm a College Student <i>(for now)</i> that came from Indonesia.</p>
                            <p>I have passion for music, technology, and game.</p>
                            <p>I'm also still learning how to develop a software or even to compose music.</p>
                        </div>
                        <v-btn slot="activator" icon ripple @click.stop ="openDrawer">
                            <v-icon large>more_horiz</v-icon>
                        </v-btn>
                    </v-flex>
                </v-container>
            </v-parallax>     
        </v-flex>
        <v-flex text-xs-center xs12>
            <v-parallax 
                dark
                alt="Bali"
                src="https://lh3.googleusercontent.com/gWXj672AlO53ij0amjcyc6ygDeNRvvtUoxBgF4GrU3P-f--n5BL2y_AbgCCLpPjyD-DKQoXnIDvrSFbUwltRTkn2NbzBlwFc1rPhlIvSj06y_CCsIxVBzMpgpdatI57PfkM3kX0w84itX-HAeSJyZ35lqVbG1QIuwxsPQxJHgl2h2zIXP9EXgSN9puSwzXtRemUHH3yohd6gouEP9MWfpVFg-RAxsIrAQ2P1UQp7J_OrG8gCYl80g5ynNVW31jxNO1L3lmvAqa8FJzSsA4enYMfBJj25MJhlcgLK0_Cz_U91hEgmiEGNlwJ-Rb5qp88rjJ2fp51aiAyF7037JQe-v03Qdz6MM_BU_wXesl_PN7xqbp1IoX0KfWUA4zj3O3852M5nOFbXa49AbvWB41ASq5IJS5pMr4-LeNU78GWaYokpta_ULK-lwVUNg9DXCfNsrKfhScQ5VIbBjClFKzIoD68Bx0LaBM5BrfG05atyfdQRzuiBRG4uGheiKBFrZGH-zRrLlC0_qiPly4Sl5aJ21xUqlkwrIWrD4-SG6SSyfeDTswweowRrq6VFUP4xXllDfYddUtZTuSTib4R02hityF65N-OX-UTHiSddgHQ1rYwBkbhxACoy17qlvajq7fs=w1493-h840-no"
            >
            </v-parallax>
        </v-flex>
        <v-flex text-xs-center xs12>
            <v-parallax 
                light
                alt="Tower BTS"
                src="https://lh3.googleusercontent.com/3-UHITpBhqxlv6na9JN8a4pD0qSRTA69cPpzc_VbfWtute0gfeZ9fHel3JWGpHNQr2piS5_uM7CCyL2oLwEoKXVAvhSBbBq3mc4oiSx3LPEux3-tq5H_DvnyBPmbyUO9vK6NR-Pb9dAkYqHKYtyjvMZxa3qDbqhWdub-3aFUrK5jSTrwxkdrniJmLcv_aCZM_ABT0sdcFMrUOlzDpC3GGanYA1MkPSpc81ad0ndG85bntVtXKwbN3yu1TV-FGAZFFNjlnI3DJQt9Z_vYTRwAb1jdYthTutOGbiljTTNl65HFoJjEebzVdAPEXYh5XiGwQvgr_YeeMxWqnkoxZ0GLjGQEizQNXn-FzceX4-qVKH5Xfl_YzUyjWOfokzjGzdLsKF1xZtTvlk6H7eMqfedagDoxePR0FO3-2_VXHF092JpCfA3svOIxtTkoc6-yApggo5IQMVyfdIt7iX8-fLePoDGNCwck-Ei_W0Cyw01TGKb-q03oGAaiIEwGtM6gPeTAjRVehgnnzpv8BXq3u_Du5vH5H-o26Bzu5fTQ4rRuhOPT55P90VKykNvrIebdmLBhS4PzlHjmxtII49Pd8RjewGZhiMBBtowGjN8dWum2acerst5VitK2qyMev67C2fw=w1275-h956-no"
            >
                <v-container fill-height fluid align-center>
                    <v-flex text-xs-center class="hidden-sm-and-down caption font-weight-bold">
                        <h1 class="display-3 font-weight-black"><i>"True Self Is Without Form"</i></h1>
                        <br />
                        <i>Zenyatta - Overwatch</i>
                    </v-flex>
                    
                    <!--Mobile View -->
                    <v-flex text-xs-center class="hidden-md-and-up caption font-weight-bold">
                        <h1 class="title font-weight-black"><i>"True Self Is Without Form"</i></h1>
                        <br />
                        <i>Zenyatta - Overwatch</i>
                    </v-flex>
                </v-container>
            </v-parallax>
        </v-flex>
        <v-flex text-xs-center xs12>
            <v-parallax 
                dark
                src="https://lh3.googleusercontent.com/nqbTLkelD5oDfswVrDAesCf52gxljxuXL0ezQzJyd--1vp4rREdjGErVboqzO3ud0cg7decupd4ltCNZ6T_FiapS7P4hHr7gp2B0Wy1YzyC8K09oVtX2EtZVwv0cfHvOMxjoDyPO0BRISfg6mEtcofnvo4gfHsSjRSFs9p3Lt-5l8OsNJSx8hBkhtOFvTBofDn9V17tKHl-A9_gtSHOi-oNK71BSZdjqe1-TXYMMlkWKZjag4f9fLMm4z4iyfhiL2yY7Rw9pmeTc5vuobhwxeh0KQ2EByg_fQeQf_MMA0jbJ6lRonEoj3RRdiidjtvTSWCAS8xgewUANHvLV1wzKOBxr3MYaAOE7TLwQQU90lE13UEnzhzeahWCvRu9P_y0s8EUAzdjIYInnJ58SmEZwjzJm4-2E4kSn2-7Co3mGhayHIj0ilBKtoDY7USjwHETG0tyD6W0HqMrDELnj8zGDMDa6AUL6H98wr0nYkfG48XUhydgjvagDwMxlXd9BQua-Ci433efPxm2Nb2FXJWI9UGoGh1r8OhakKWHZ1RqQnMjEvn7yJsS1bP2cKOQvqK8D2BedHoSyWFlqSU1e6NuwjayZWvD_6_jjIihVx7b6pmLYon_UcQvhLIicLfKyCk8=w1700-h956-no"
            >
                <v-container fill-height fluid align-center>
                    <v-flex text-xs-center class="caption font-weight-black">
                        <i>All photos displayed here were taken by me &copy; {{new Date().getFullYear()}}</i>
                    </v-flex>
                </v-container>
            </v-parallax>
        </v-flex>
    </v-layout>
</template>

<script>
import App from '../App.vue'
import { serverBus } from '../main.js'

export default {
    name: "LandingPage",
    props: {
        drawer: {
            type: Boolean,
            default: null
        }
    },
    methods: {
        openDrawer: function () {
            this.drawer = true
            serverBus.$emit('openDrawer', this.drawer)
        }
    }
}
</script>

