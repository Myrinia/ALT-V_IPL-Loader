'use strict'

/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import alt from 'alt-client';
import native from 'natives'

interface IPL {
    iplname: string,
    desc: string,
    pos: alt.Vector3,
    isLoaded: boolean,
    hasInteriour: boolean
    interiourHandle: number,
    children: string[]
};

// Empty ipl
// { iplname: '', desc: '', pos: new alt.Vector3(), isLoaded: false },

export const IPLS : IPL[] = [
    // Diamond Casino & Resort
    { iplname: 'vw_casino_penthouse', desc: 'Casino Penthouse', pos: new alt.Vector3(976.6364, 70.29476, 115.1641), isLoaded: false },
    { iplname: 'hei_dlc_windows_casino', desc: 'Casino Windows', pos: new alt.Vector3(976.6364, 70.29476, 115.1641), isLoaded: false },
    { iplname: 'vw_casino_carpark', desc: 'Casino Parkhouse', pos: new alt.Vector3(1380.0000, 200.0000, -50.0000), isLoaded: false },
    { iplname: 'vw_casino_garage', desc: 'Casino Garage', pos: new alt.Vector3(1295.0000, 230.0000, -50.0000), isLoaded: false },
    { iplname: 'vw_casino_main', desc: 'Casino Main', pos: new alt.Vector3(1100.0000, 220.0000, -50.0000), isLoaded: false },
    { iplname: 'vw_dlc_Casino_door', desc: 'Casino Door', pos: new alt.Vector3(924.369, 47.037, 81.093), isLoaded: false },
    { iplname: 'hei_dlc_casino_door', desc: 'Casino Door', pos: new alt.Vector3(924.369, 47.037, 81.093), isLoaded: false },

    // Bunkers
    { iplname: 'gr_case10_bunkerclosed', desc: 'Zancudo Bunker', pos: new alt.Vector3(-3058.714, 3329.19, 12.5844), isLoaded: false },
    { iplname: 'gr_case9_bunkerclosed', desc: 'Route 68 Bunker', pos: new alt.Vector3(24.43542, 2959.705, 58.35517), isLoaded: false },
    { iplname: 'gr_case3_bunkerclosed', desc: 'Oilfields Bunker', pos: new alt.Vector3(481.0465, 2995.135, 43.96672), isLoaded: false },
    { iplname: 'gr_case0_bunkerclosed', desc: 'Desert Bunker', pos: new alt.Vector3(848.6175, 2996.567, 45.81612), isLoaded: false },
    { iplname: 'gr_case1_bunkerclosed', desc: 'Smoke Tree Bunker', pos: new alt.Vector3(2126.785, 3335.04, 48.21422), isLoaded: false },
    { iplname: 'gr_case2_bunkerclosed', desc: 'Scrapyard Bunker', pos: new alt.Vector3(2493.654, 3140.399, 51.28789), isLoaded: false },
    { iplname: 'gr_case5_bunkerclosed', desc: 'Grapeseed Bunker', pos: new alt.Vector3(1823.961, 4708.14, 42.4991), isLoaded: false },
    { iplname: 'gr_case7_bunkerclosed', desc: 'Paleto Bunker', pos: new alt.Vector3(-783.0755, 5934.686, 24.31475), isLoaded: false },
    { iplname: 'gr_case11_bunkerclosed', desc: 'Route 1 Bunker', pos: new alt.Vector3(-3180.466, 1374.192, 19.9597), isLoaded: false },
    { iplname: 'gr_case6_bunkerclosed', desc: 'Farmhouse Bunker', pos: new alt.Vector3(1570.372, 2254.549, 78.89397), isLoaded: false },
    { iplname: 'gr_case4_bunkerclosed', desc: 'Raton Canyon Bunker', pos: new alt.Vector3(-391.3216, 4363.728, 58.65862), isLoaded: false },

    // Apartments
    { iplname: 'apa_v_mp_h_01_a', desc: 'Modern 1 Apartment', pos: new alt.Vector3(-786.8663, 315.7642, 217.6385), isLoaded: false },
    { iplname: 'apa_v_mp_h_01_c', desc: 'Modern 2 Apartment', pos: new alt.Vector3(-786.9563, 315.6229, 187.9136), isLoaded: false },
    { iplname: 'apa_v_mp_h_01_b', desc: 'Modern 3 Apartment', pos: new alt.Vector3(-774.0126, 342.0428, 196.6864), isLoaded: false },
    { iplname: 'apa_v_mp_h_02_a', desc: 'Mody 1 Apartment', pos: new alt.Vector3(-787.0749, 315.8198, 217.6386), isLoaded: false },
    { iplname: 'apa_v_mp_h_02_c', desc: 'Mody 2 Apartment', pos: new alt.Vector3(-786.8195, 315.5634, 187.9137), isLoaded: false },
    { iplname: 'apa_v_mp_h_02_b', desc: 'Mody 3 Apartment', pos: new alt.Vector3(-774.1382, 342.0316, 196.6864), isLoaded: false },
    { iplname: 'apa_v_mp_h_03_a', desc: 'Vibrant 1 Apartment', pos: new alt.Vector3(-786.6245, 315.6175, 217.6385), isLoaded: false },
    { iplname: 'apa_v_mp_h_03_c', desc: 'Vibrant 2 Apartment', pos: new alt.Vector3(-786.9584, 315.7974, 187.9135), isLoaded: false },
    { iplname: 'apa_v_mp_h_03_b', desc: 'Vibrant 3 Apartment', pos: new alt.Vector3(-774.0223, 342.1718, 196.6863), isLoaded: false },
    { iplname: 'apa_v_mp_h_04_a', desc: 'Sharp 1 Apartment', pos: new alt.Vector3(-787.0902, 315.7039, 217.6384), isLoaded: false },
    { iplname: 'apa_v_mp_h_04_c', desc: 'Sharp 2 Apartment', pos: new alt.Vector3(-787.0155, 315.7071, 187.9135), isLoaded: false },
    { iplname: 'apa_v_mp_h_04_b', desc: 'Sharp 3 Apartment', pos: new alt.Vector3(-773.8976, 342.1525, 196.6863), isLoaded: false },
    { iplname: 'apa_v_mp_h_05_a', desc: 'Monochrome 1 Apartment', pos: new alt.Vector3(-786.9887, 315.7393, 217.6386), isLoaded: false },
    { iplname: 'apa_v_mp_h_05_c', desc: 'Monochrome 2 Apartment', pos: new alt.Vector3(-786.8809, 315.6634, 187.9136), isLoaded: false },
    { iplname: 'apa_v_mp_h_05_b', desc: 'Monochrome 3 Apartment', pos: new alt.Vector3(-774.0675, 342.0773, 196.6864), isLoaded: false },
    { iplname: 'apa_v_mp_h_06_a', desc: 'Seductive 1 Apartment', pos: new alt.Vector3(-787.1423, 315.6943, 217.6384), isLoaded: false },
    { iplname: 'apa_v_mp_h_06_c', desc: 'Seductive 2 Apartment', pos: new alt.Vector3(-787.0961, 315.815, 187.9135), isLoaded: false },
    { iplname: 'apa_v_mp_h_06_b', desc: 'Seductive 3 Apartment', pos: new alt.Vector3(-773.9552, 341.9892, 196.6862), isLoaded: false },
    { iplname: 'apa_v_mp_h_07_a', desc: 'Regal 1 Apartment', pos: new alt.Vector3(-787.029, 315.7113, 217.6385), isLoaded: false },
    { iplname: 'apa_v_mp_h_07_c', desc: 'Regal 2 Apartment', pos: new alt.Vector3(-787.0574, 315.6567, 187.9135), isLoaded: false },
    { iplname: 'apa_v_mp_h_07_b', desc: 'Regal 3 Apartment', pos: new alt.Vector3(-774.0109, 342.0965, 196.6863), isLoaded: false },
    { iplname: 'apa_v_mp_h_08_a', desc: 'Aqua 1 Apartment', pos: new alt.Vector3(-786.9469, 315.5655, 217.6383), isLoaded: false },
    { iplname: 'apa_v_mp_h_08_c', desc: 'Aqua 2 Apartment', pos: new alt.Vector3(-786.9756, 315.723, 187.9134), isLoaded: false },
    { iplname: 'apa_v_mp_h_08_b', desc: 'Aqua 3 Apartment', pos: new alt.Vector3(-774.0349, 342.0296, 196.6862), isLoaded: false },

    // CEO Offices
    { iplname: 'ex_dt1_02_office_02b', desc: 'Executive Rich', pos: new alt.Vector3(-141.1987, -620.913, 168.8205), isLoaded: false },
    { iplname: 'ex_dt1_02_office_02c', desc: 'Executive Cool', pos: new alt.Vector3(-141.5429, -620.9524, 168.8204), isLoaded: false },
    { iplname: 'ex_dt1_02_office_02a', desc: 'Executive Contrast', pos: new alt.Vector3(-141.2896, -620.9618, 168.8204), isLoaded: false },
    { iplname: 'ex_dt1_02_office_01a', desc: 'Old Spice Warm', pos: new alt.Vector3(-141.4966, -620.8292, 168.8204), isLoaded: false },
    { iplname: 'ex_dt1_02_office_01b', desc: 'Old Spice Classical', pos: new alt.Vector3(-141.3997, -620.9006, 168.8204), isLoaded: false },
    { iplname: 'ex_dt1_02_office_01c', desc: 'Old Spice Vintage', pos: new alt.Vector3(-141.5361, -620.9186, 168.8204), isLoaded: false },
    { iplname: 'ex_dt1_02_office_03a', desc: 'Power Broker Ice', pos: new alt.Vector3(-141.392, -621.0451, 168.8204), isLoaded: false },
    { iplname: 'ex_dt1_02_office_03b', desc: 'Power Broker Conservative', pos: new alt.Vector3(-141.1945, -620.8729, 168.8204), isLoaded: false },
    { iplname: 'ex_dt1_02_office_03c', desc: 'Power Broker Polished', pos: new alt.Vector3(-141.4924, -621.0035, 168.8205), isLoaded: false },

    // Maze Bank
    { iplname: 'ex_dt1_11_office_02b', desc: 'Executive Rich', pos: new alt.Vector3(-75.8466, -826.9893, 243.3859), isLoaded: false },
    { iplname: 'ex_dt1_11_office_02c', desc: 'Executive Cool', pos: new alt.Vector3(-75.49945, -827.05, 243.386), isLoaded: false },
    { iplname: 'ex_dt1_11_office_02a', desc: 'Executive Contrast', pos: new alt.Vector3(-75.49827, -827.1889, 243.386), isLoaded: false },
    { iplname: 'ex_dt1_11_office_01a', desc: 'Old Spice Warm', pos: new alt.Vector3(-75.44054, -827.1487, 243.3859), isLoaded: false },
    { iplname: 'ex_dt1_11_office_01b', desc: 'Old Spice Classical', pos: new alt.Vector3(-75.63942, -827.1022, 243.3859), isLoaded: false },
    { iplname: 'ex_dt1_11_office_01c', desc: 'Old Spice Vintage', pos: new alt.Vector3(-75.47446, -827.2621, 243.386), isLoaded: false },
    { iplname: 'ex_dt1_11_office_03a', desc: 'Power Broker Ice', pos: new alt.Vector3(-75.56978, -827.1152, 243.3859), isLoaded: false },
    { iplname: 'ex_dt1_11_office_03b', desc: 'Power Broker Conservative', pos: new alt.Vector3(-75.51953, -827.0786, 243.3859), isLoaded: false },
    { iplname: 'ex_dt1_11_office_03c', desc: 'Power Broker Polished', pos: new alt.Vector3(-75.41915, -827.1118, 243.3858), isLoaded: false },

    // Maze Bank West
    { iplname: 'ex_sm_15_office_02b', desc: 'Executive Rich', pos: new alt.Vector3(-1392.667, -480.4736, 72.04217), isLoaded: false },
    { iplname: 'ex_sm_15_office_02c', desc: 'Executive Cool', pos: new alt.Vector3(-1392.542, -480.4011, 72.04211), isLoaded: false },
    { iplname: 'ex_sm_15_office_02a', desc: 'Executive Contrast', pos: new alt.Vector3(-1392.626, -480.4856, 72.04212), isLoaded: false },
    { iplname: 'ex_sm_15_office_01a', desc: 'Old Spice Warm', pos: new alt.Vector3(-1392.617, -480.6363, 72.04208), isLoaded: false },
    { iplname: 'ex_sm_15_office_01b', desc: 'Old Spice Classical', pos: new alt.Vector3(-1392.532, -480.7649, 72.04207), isLoaded: false },
    { iplname: 'ex_sm_15_office_01c', desc: 'Old Spice Vintage', pos: new alt.Vector3(-1392.611, -480.5562, 72.04214), isLoaded: false },
    { iplname: 'ex_sm_15_office_03a', desc: 'Power Broker Ice', pos: new alt.Vector3(-1392.563, -480.549, 72.0421), isLoaded: false },
    { iplname: 'ex_sm_15_office_03b', desc: 'Power Broker Convservative', pos: new alt.Vector3(-1392.528, -480.475, 72.04206), isLoaded: false },
    { iplname: 'ex_sm_15_office_03c', desc: 'Power Broker Polished', pos: new alt.Vector3(-1392.416, -480.7485, 72.04207), isLoaded: false },

    // Lombank
    { iplname: 'ex_sm_13_office_02b', desc: 'Executive Rich', pos: new alt.Vector3(-1579.756, -565.0661, 108.523), isLoaded: false },
    { iplname: 'ex_sm_13_office_02c', desc: 'Executive Cool', pos: new alt.Vector3(-1579.678, -565.0034, 108.5229), isLoaded: false },
    { iplname: 'ex_sm_13_office_02a', desc: 'Executive Contrast', pos: new alt.Vector3(-1579.583, -565.0399, 108.5229), isLoaded: false },
    { iplname: 'ex_sm_13_office_01a', desc: 'Old Spice Warm', pos: new alt.Vector3(-1579.702, -565.0366, 108.5229), isLoaded: false },
    { iplname: 'ex_sm_13_office_01b', desc: 'Old Spice Classical', pos: new alt.Vector3(-1579.643, -564.9685, 108.5229), isLoaded: false },
    { iplname: 'ex_sm_13_office_01c', desc: 'Old Spice Vintage', pos: new alt.Vector3(-1579.681, -565.0003, 108.523), isLoaded: false },
    { iplname: 'ex_sm_13_office_03a', desc: 'Power Broker Ice', pos: new alt.Vector3(-1579.677, -565.0689, 108.5229), isLoaded: false },
    { iplname: 'ex_sm_13_office_03b', desc: 'Power Broker Conservative', pos: new alt.Vector3(-1579.708, -564.9634, 108.5229), isLoaded: false },
    { iplname: 'ex_sm_13_office_03c', desc: 'Power Broker Polished', pos: new alt.Vector3(-1579.693, -564.8981, 108.5229), isLoaded: false },

    // Clubs & Warehouses
    { iplname: 'bkr_biker_interior_placement_interior_0_biker_dlc_int_01_milo', desc: 'Clubhouse 1', pos: new alt.Vector3(1107.04, -3157.399, -37.51859), isLoaded: false },
    { iplname: 'bkr_biker_interior_placement_interior_1_biker_dlc_int_02_milo', desc: 'Clubhouse 2', pos: new alt.Vector3(998.4809, -3164.711, -38.90733), isLoaded: false },
    { iplname: 'bkr_biker_interior_placement_interior_2_biker_dlc_int_ware01_milo', desc: 'Warehouse 1', pos: new alt.Vector3(1009.5, -3196.6, -38.99682), isLoaded: false },
    { iplname: 'bkr_biker_interior_placement_interior_3_biker_dlc_int_ware02_milo', desc: 'Warehouse 2', pos: new alt.Vector3(1051.491, -3196.536, -39.14842), isLoaded: false },
    { iplname: 'bkr_biker_interior_placement_interior_4_biker_dlc_int_ware03_milo', desc: 'Warehouse 3', pos: new alt.Vector3(1093.6, -3196.6, -38.99841), isLoaded: false },
    { iplname: 'bkr_biker_interior_placement_interior_5_biker_dlc_int_ware04_milo', desc: 'Warehouse 4', pos: new alt.Vector3(1121.897, -3195.338, -40.4025), isLoaded: false },
    { iplname: 'bkr_biker_interior_placement_interior_6_biker_dlc_int_ware05_milo', desc: 'Warehouse 5', pos: new alt.Vector3(1165, -3196.6, -39.01306), isLoaded: false },
    { iplname: 'ex_exec_warehouse_placement_interior_1_int_warehouse_s_dlc_milo', desc: 'Warehouse Small', pos: new alt.Vector3(1094.988, -3101.776, -39.00363), isLoaded: false },
    { iplname: 'ex_exec_warehouse_placement_interior_0_int_warehouse_m_dlc_milo', desc: 'Warehouse Medium', pos: new alt.Vector3(1056.486, -3105.724, -39.00439), isLoaded: false },
    { iplname: 'ex_exec_warehouse_placement_interior_2_int_warehouse_l_dlc_milo', desc: 'Warehouse Large', pos: new alt.Vector3(1006.967, -3102.079, -39.0035), isLoaded: false },
    { iplname: 'imp_impexp_interior_placement_interior_1_impexp_intwaremed_milo_', desc: 'Cargarage', pos: new alt.Vector3(994.5925, -3002.594, -39.64699), isLoaded: false },

    // Special
    { iplname: 'Carwash_with_spinners', desc: 'Carwash', pos: new alt.Vector3(55.7, -1391.3, 30.5), isLoaded: false },
    { iplname: 'sp1_10_real_interior_lod', desc: 'Stadium', pos: new alt.Vector3(-248.491, -2010.509, 34.574), isLoaded: false },
    { iplname: 'bkr_bi_id1_23_door', desc: 'Garage in La Mesa', pos: new alt.Vector3(970.27453, -1826.56982, 31.11477), isLoaded: false },
    { iplname: 'lr_cs6_08_grave_closed	', desc: 'Red Hill Valley church - Grave', pos: new alt.Vector3(-282.4638, 2835.84, 55.914), isLoaded: false },
    { iplname: 'methtrailer_grp1', desc: 'Lost\'s trailer park', pos: new alt.Vector3(49.49379, 3744.472, 46.38629), isLoaded: false },
    { iplname: 'bkr_bi_hw1_13_int', desc: 'Lost Clubhouse', pos: new alt.Vector3(984.1552, -95.3662, 74.50), isLoaded: false },
    { iplname: 'rc12b_default', desc: 'Pillbox hospital', pos: new alt.Vector3(307.1680, -590.807, 43.280), isLoaded: false },
    { iplname: 'shr_int', desc: 'PDM (Simons Car Dealer)', pos: new alt.Vector3(-54.30, -1109.3767, 26.4358), isLoaded: false, children: ['csr_beforeMission','shutter_closed' ], hasInteriour: true },
    { iplname: 'CS3_07_MPGates', desc: 'Remove Zancudoe Gates', pos: new alt.Vector3(-1599.95, 2807.05, 17.204), isLoaded: false },
    { iplname: 'ferris_finale_Anim', desc: 'Ferris Wheel', pos: new alt.Vector3(-1645.55, -1113.04, 12.65), isLoaded: false },
    { iplname: 'hei_dlc_windows_casino', desc: 'Casino Penthouse Glassfront', pos: new alt.Vector3(968.156, 0.3060, 111.2922), isLoaded: false },
    { iplname: 'golfflags', desc: 'Golfflags', pos: new alt.Vector3(-1032, -84, 44), isLoaded: false },
    { iplname: 'racetrack01', desc: 'Racetrack', pos: new alt.Vector3(1978, 3111, 46), isLoaded: false },

    // Single IPL's
    { iplname: 'cargoship', desc: 'Normal Cargo Ship', pos: new alt.Vector3(-163.3628, -2385.161, 5.999994), isLoaded: false },
    { iplname: 'sunkcargoship', desc: 'Sunken Cargo Ship', pos: new alt.Vector3(-163.3628, -2385.161, 5.999994), isLoaded: false },
    { iplname: 'SUNK_SHIP_FIRE', desc: 'Burning Cargo Ship', pos: new alt.Vector3(-163.3628, -2385.161, 5.999994), isLoaded: false },
    { iplname: 'redCarpet', desc: 'Red Carpet', pos: new alt.Vector3(300.5927, 300.5927, 104.3776), isLoaded: false },
    { iplname: 'DES_StiltHouse_imapend', desc: 'Rekt Stilthouse Destroyed', pos: new alt.Vector3(-1020.518, 663.27, 153.5167), isLoaded: false },
    { iplname: 'DES_stilthouse_rebuild', desc: 'Rekt Stilthouse Rebuild', pos: new alt.Vector3(-1020.518, 663.27, 153.5167), isLoaded: false },
    { iplname: 'FINBANK', desc: 'Union Depository', pos: new alt.Vector3(2.6968, -667.0166, 16.13061), isLoaded: false },
    { iplname: 'TrevorsMP', desc: 'Trevors Trailer Dirty', pos: new alt.Vector3(1975.552, 3820.538, 33.44833), isLoaded: false },
    { iplname: 'TrevorsTrailerTidy', desc: 'Trevors Trailer Clean', pos: new alt.Vector3(1975.552, 3820.538, 33.44833), isLoaded: false },
    { iplname: 'SP1_10_real_interior', desc: 'Stadium', pos: new alt.Vector3(-248.6731, -2010.603, 30.14562), isLoaded: false },
    { iplname: 'refit_unload', desc: 'Max Renda Shop', pos: new alt.Vector3(-585.8247, -282.72, 35.45475), isLoaded: false },
    { iplname: 'post_hiest_unload', desc: 'Jewel Store', pos: new alt.Vector3(-630.07, -236.332, 38.05704), isLoaded: false },
    { iplname: 'FIBlobby', desc: 'FIB Lobby', pos: new alt.Vector3(110.4, -744.2, 45.7496), isLoaded: false },

    // GunRunning Heist
    { iplname: 'gr_heist_yacht2', desc: 'Yacht2', pos: new alt.Vector3(-1418.21000000, 6749.81000000, 10.98968000), isLoaded: false },
    { iplname: 'gr_heist_yacht2_bar', desc: 'Yacht2 Bar', pos: new alt.Vector3(-1418.21000000, 6749.81000000, 10.98968000), isLoaded: false },
    { iplname: 'gr_heist_yacht2_bedrm', desc: 'Yacht2 Bed', pos: new alt.Vector3(-1418.21000000, 6749.81000000, 10.98968000), isLoaded: false },
    { iplname: 'gr_heist_yacht2_bridge', desc: 'Yacht2 Bridge', pos: new alt.Vector3(-1418.21000000, 6749.81000000, 10.98968000), isLoaded: false },
    { iplname: 'gr_heist_yacht2_enginrm', desc: 'Yacht2 Engine', pos: new alt.Vector3(-1418.21000000, 6749.81000000, 10.98968000), isLoaded: false },
    { iplname: 'gr_heist_yacht2_lounge', desc: 'Yacht2 Lounge', pos: new alt.Vector3(-1418.21000000, 6749.81000000, 10.98968000), isLoaded: false },

    // Dignity Heist Yacht
    { iplname: 'smboat', desc: 'SM Boat', pos: new alt.Vector3(-2027.946, -1036.695, 6.707587), isLoaded: false },
    { iplname: 'smboat_lod', desc: 'SM Boat LOD', pos: new alt.Vector3(-2027.946, -1036.695, 6.707587), isLoaded: false },
    { iplname: 'hei_yacht_heist', desc: 'Yacht Heist', pos: new alt.Vector3(-2027.946, -1036.695, 6.707587), isLoaded: false },
    { iplname: 'hei_yacht_heist_enginrm', desc: 'Yacht Heist Engine', pos: new alt.Vector3(-2027.946, -1036.695, 6.707587), isLoaded: false },
    { iplname: 'hei_yacht_heist_Lounge', desc: 'Yacht Heist Lounge', pos: new alt.Vector3(-2027.946, -1036.695, 6.707587), isLoaded: false },
    { iplname: 'hei_yacht_heist_Bridge', desc: 'Yacht Heist Bridge', pos: new alt.Vector3(-2027.946, -1036.695, 6.707587), isLoaded: false },
    { iplname: 'hei_yacht_heist_Bar', desc: 'Yacht Heist Bar', pos: new alt.Vector3(-2027.946, -1036.695, 6.707587), isLoaded: false },
    { iplname: 'hei_yacht_heist_Bedrm', desc: 'Yacht Heist Bed', pos: new alt.Vector3(-2027.946, -1036.695, 6.707587), isLoaded: false },
    { iplname: 'hei_yacht_heist_DistantLights', desc: 'Yacht Heist DistantLights', pos: new alt.Vector3(-2027.946, -1036.695, 6.707587), isLoaded: false },
    { iplname: 'hei_yacht_heist_LODLights', desc: 'Yacht Heist LOD Lights', pos: new alt.Vector3(-2027.946, -1036.695, 6.707587), isLoaded: false },

    // Dignity Party Yacht
    { iplname: 'smboat', desc: 'SM Boat', pos: new alt.Vector3(-2023.643, -1038.119, 5.576781), isLoaded: false },
    { iplname: 'smboat_lod', desc: 'SM Boat LOD', pos: new alt.Vector3(-2023.643, -1038.119, 5.576781), isLoaded: false },
    { iplname: 'hei_yacht_heist', desc: 'Yacht Heist', pos: new alt.Vector3(-2023.643, -1038.119, 5.576781), isLoaded: false },
    { iplname: 'hei_yacht_heist_enginrm', desc: 'Yacht Heist Engine', pos: new alt.Vector3(-2023.643, -1038.119, 5.576781), isLoaded: false },
    { iplname: 'hei_yacht_heist_Lounge', desc: 'Yacht Heist Lounge', pos: new alt.Vector3(-2023.643, -1038.119, 5.576781), isLoaded: false },
    { iplname: 'hei_yacht_heist_Bridge', desc: 'Yacht Heist Bridge', pos: new alt.Vector3(-2023.643, -1038.119, 5.576781), isLoaded: false },
    { iplname: 'hei_yacht_heist_Bar', desc: 'Yacht Heist Bar', pos: new alt.Vector3(-2023.643, -1038.119, 5.576781), isLoaded: false },
    { iplname: 'hei_yacht_heist_Bedrm', desc: 'Yacht heist Bed', pos: new alt.Vector3(-2023.643, -1038.119, 5.576781), isLoaded: false },
    { iplname: 'hei_yacht_heist_DistantLights', desc: 'Yacht Heist DistanceLights', pos: new alt.Vector3(-2023.643, -1038.119, 5.576781), isLoaded: false },
    { iplname: 'hei_yacht_heist_LODLights', desc: 'Yacht Heist LOD Lights', pos: new alt.Vector3(-2023.643, -1038.119, 5.576781), isLoaded: false },

    // AirCraft Carrier
    { iplname: 'hei_carrier', desc: 'Aircraft Carrier', pos: new alt.Vector3(3084.73, -4770.709, 15.26167), isLoaded: false },
    { iplname: 'hei_carrier_DistantLights', desc: 'Aircraft Carrier Distance Lights', pos: new alt.Vector3(3084.73, -4770.709, 15.26167), isLoaded: false },
    { iplname: 'hei_Carrier_int1', desc: 'Aircraft Carrier Int1', pos: new alt.Vector3(3084.73, -4770.709, 15.26167), isLoaded: false },
    { iplname: 'hei_Carrier_int2', desc: 'Aircraft Carrier Int2', pos: new alt.Vector3(3084.73, -4770.709, 15.26167), isLoaded: false },
    { iplname: 'hei_Carrier_int3', desc: 'Aircraft Carrier Int3', pos: new alt.Vector3(3084.73, -4770.709, 15.26167), isLoaded: false },
    { iplname: 'hei_Carrier_int4', desc: 'Aircraft Carrier Int4', pos: new alt.Vector3(3084.73, -4770.709, 15.26167), isLoaded: false },
    { iplname: 'hei_Carrier_int5', desc: 'Aircraft Carrier Int5', pos: new alt.Vector3(3084.73, -4770.709, 15.26167), isLoaded: false },
    { iplname: 'hei_Carrier_int6', desc: 'Aircraft Carrier Int6', pos: new alt.Vector3(3084.73, -4770.709, 15.26167), isLoaded: false },
    { iplname: 'hei_carrier_LODLights', desc: '', pos: new alt.Vector3(3084.73, -4770.709, 15.26167), isLoaded: false },

    // Train Bridge
    // { iplname: 'canyonriver01_traincrash', desc: 'Train Crash', pos: new alt.Vector3(532.1309, 4526.187, 89.79387), isLoaded: false },
    // { iplname: 'railing_end', desc: 'Railing End', pos: new alt.Vector3(532.1309, 4526.187, 89.79387), isLoaded: false },
    { iplname: 'canyonriver01', desc: 'Canyonriver', pos: new alt.Vector3(532.1309, 4526.187, 89.79387), isLoaded: false },
    { iplname: 'railing_start', desc: 'Railing Start', pos: new alt.Vector3(532.1309, 4526.187, 89.79387), isLoaded: false },

    // North Yankton
    { iplname: 'prologue01', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue01c', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue01d', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue01e', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue01f', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue01g', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue01h', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue01i', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue01j', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue01k', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue01z', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue02', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue03', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue03b', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue03_grv_dug', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue_grv_torch', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue04', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue04b', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue04_cover', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'des_protree_end', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'des_protree_start', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue05', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue05b', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue06', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue06b', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue06_int', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue06_pannel', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'plg_occl_00', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologue_occl', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologuerd', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },
    { iplname: 'prologuerdb', desc: '', pos: new alt.Vector3(3217.697, -4834.826, 111.8152), isLoaded: false },

    // Oneils Farm
    { iplname: 'farm', desc: 'Farm', pos: new alt.Vector3(2469.03, 4955.278, 45.11892), isLoaded: false },
    { iplname: 'farm_lod', desc: 'Farm LOD', pos: new alt.Vector3(2469.03, 4955.278, 45.11892), isLoaded: false },
    { iplname: 'farm_props', desc: 'Farm Props', pos: new alt.Vector3(2469.03, 4955.278, 45.11892), isLoaded: false },
    { iplname: 'farm_int', desc: 'Farm int', pos: new alt.Vector3(2469.03, 4955.278, 45.11892), isLoaded: false },

    // Morgue
    { iplname: 'coronertrash', desc: 'Coronoertrash', pos: new alt.Vector3(275.446, -1361.11, 24.5378), isLoaded: false },
    { iplname: 'Coroner_Int_On', desc: 'Coroner_Int_On', pos: new alt.Vector3(275.446, -1361.11, 24.5378), isLoaded: false },

    // Lesters Factory
    { iplname: 'id2_14_during_door', desc: 'ID2 Door', pos: new alt.Vector3(716.84, -962.05, 31.59), isLoaded: false },
    { iplname: 'id2_14_during1', desc: 'During1', pos: new alt.Vector3(716.84, -962.05, 31.59), isLoaded: false },

    // Life Invader Lobby
    { iplname: 'facelobby', desc: 'Lfe Invader Lobby', pos: new alt.Vector3(-1047.9, -233.0, 39.0), isLoaded: false },
    { iplname: 'facelobby_lod', desc: 'Lfe Invader Lobby', pos: new alt.Vector3(-1047.9, -233.0, 39.0), isLoaded: false },

    // Tunnels
    { iplname: 'v_tunnel_hole', desc: 'Tunnelloch', pos: new alt.Vector3(-49.415, -558.287, 30.10), isLoaded: false },
    { iplname: 'v_tunnel_hole_lod', desc: 'Tunnelloch LOD', pos: new alt.Vector3(-49.415, -558.287, 30.10), isLoaded: false },

    // Garages
    { iplname: '', desc: '2 Car Garage', pos: new alt.Vector3(173.2903, -1003.6, -99.65707), isLoaded: false },
    { iplname: '', desc: '6 Car Garage', pos: new alt.Vector3(197.8153, -1002.293, -99.65749), isLoaded: false },
    { iplname: '', desc: '10 Car Garage', pos: new alt.Vector3(229.9559, -981.7928, -99.66071), isLoaded: false },

    // NO IPL Names
    //Casino
    { iplname: 'vw_dlc_casino_door', desc: 'Casino Doors', pos: new alt.Vector3(924.369, 47.037, 81.093), isLoaded: false, hasInteriour: true },
    { iplname: 'hei_dlc_casino_door', desc: 'Casino Doors2', pos: new alt.Vector3(924.369, 47.037, 81.093), isLoaded: false, hasInteriour: true },

    // Garages
    { iplname: '', desc: '2 Car Garage', pos: new alt.Vector3(173.2903, -1003.6, -99.65707), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: '6 Car Garage', pos: new alt.Vector3(173.2903, -1003.6, -99.65707), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: '10 Car Garage', pos: new alt.Vector3(173.2903, -1003.6, -99.65707), isLoaded: false, hasInteriour: true },

    // Apartments
    { iplname: '', desc: 'Low End Apartment', pos: new alt.Vector3(261.4586, -998.8196, -99.00863), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: '4 Integrity Way, Apt 28', pos: new alt.Vector3(-18.07856, -583.6725, 79.46569), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: '4 Integrity Way, Apt 30', pos: new alt.Vector3(-35.31277, -580.4199, 88.71221), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'Dell Perro Heights, Apt 4', pos: new alt.Vector3(-1468.14, -541.815, 73.4442), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'Dell Perro Heights, Apt 7', pos: new alt.Vector3(-1477.14, -538.7499, 55.5264), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'Richard Majestic, Apt 2', pos: new alt.Vector3(-915.811, -379.432, 113.6748), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'Tinsel Towers, Apt 42', pos: new alt.Vector3(-614.86, 40.6783, 97.60007), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'EclipseTowers, Apt 3', pos: new alt.Vector3(-773.407, 341.766, 211.397), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: '3655 Wild Oats Drive', pos: new alt.Vector3(-169.286, 486.4938, 137.4436), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: '2044 North Conker Avenue', pos: new alt.Vector3(340.9412, 437.1798, 149.3925), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: '2045 North Conker Avenue', pos: new alt.Vector3(373.023, 416.105, 145.7006), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: '2862 Hillcrest Avenue', pos: new alt.Vector3(-676.127, 588.612, 145.1698), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: '2868 Hillcrest Avenue', pos: new alt.Vector3(-763.107, 615.906, 144.1401), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: '2874 Hillcrest Avenue', pos: new alt.Vector3(-857.798, 682.563, 152.6529), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: '2677 Whispymound Drive', pos: new alt.Vector3(120.5, 549.952, 184.097), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: '2133 Mad Wayne Thunder', pos: new alt.Vector3(-1288, 440.748, 97.69459), isLoaded: false, hasInteriour: true },

    // MISC
    { iplname: '', desc: 'Bunker Interior', pos: new alt.Vector3(899.5518, -3246.038, -98.04907), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'CharCreator', pos: new alt.Vector3(402.5164, -1002.847, -99.2587), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'Mission Carpark', pos: new alt.Vector3(405.9228, -954.1149, -99.6627), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'Torture Room', pos: new alt.Vector3(136.5146, -2203.149, 7.30914), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'Solomon\'s Office', pos: new alt.Vector3(-1005.84, -478.92, 50.02733), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'Psychiatrist\'s Office', pos: new alt.Vector3(-1908.024, -573.4244, 19.09722), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'Omega\'s Garage', pos: new alt.Vector3(2331.344, 2574.073, 46.68137), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'Movie Theatre', pos: new alt.Vector3(-1427.299, -245.1012, 16.8039), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'Motel', pos: new alt.Vector3(152.2605, -1004.471, -98.99999), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'Madrazos Ranch', pos: new alt.Vector3(1399.9958, 1147.2348, 115.32130), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'Life Invader Office', pos: new alt.Vector3(-1044.193, -236.9535, 37.96496), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'Lester\'s House', pos: new alt.Vector3(1273.9, -1719.305, 54.77141), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'FBI Top Floor', pos: new alt.Vector3(134.5835, -749.339, 258.152), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'FBI Floor 47', pos: new alt.Vector3(134.5835, -766.486, 234.152), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'FBI Floor 49', pos: new alt.Vector3(134.635, -765.831, 242.152), isLoaded: false, hasInteriour: true },
    { iplname: '', desc: 'IAA Office', pos: new alt.Vector3(117.22, -620.938, 206.1398), isLoaded: false, hasInteriour: true },

    // { iplname: '', desc: '', pos: new alt.Vector3(), isLoaded: false, hasInteriour: false },

] as IPL[];

class cIPLManager {
    currentIPLs: IPL[];
    currentCheckInterval: number = -1;
    isChecking: boolean = false;

    constructor() {
        this.currentIPLs = [] as IPL[];
        alt.on('resourceStop', () => {
            this.stop();
        });
        
        alt.onServer('IPLLoader::Add', this.addIPLFromServer);
    }
    
    addIPLFromServer = async (iplname: string, description: string, posX: number, posY: number, posZ: number, hasInteriour:boolean) => {
        const iplToAdd = { iplname: iplname, desc: description, pos: new alt.Vector3(posX, posY, posZ), isLoaded: false, hasInteriour: hasInteriour };
        this.addIPL(iplToAdd);
    }
    
    start = async () => {
        this.currentCheckInterval = alt.setInterval(this.check, 500);
    }

    stop = async () => {
        alt.clearInterval(this.currentCheckInterval);
        this.currentCheckInterval = -1;

        //wait for 'check' thread to stop
        while (this.isChecking) { }

        this.currentIPLs.forEach(ipl => {
            if (ipl.isLoaded) {
                this.deactivateIPL(ipl);
            }
        });
    }

    addIPL(ipl: IPL) {
        this.currentIPLs.push(ipl);
    }

    check = async () => {
        if (this.isChecking) {
            return;
        }
        this.isChecking = true;
        const playerPos = alt.Player.local.pos;

        let neededIPLs = {} as {}; 

        // Check if the IPL's are in range, and save them
        this.currentIPLs.forEach(ipl => {
            if (ipl.pos.distanceTo(playerPos) < 100) { // less then 100 meter away
                // We need this IPL, so add it to our needed IPL
                if (!neededIPLs.hasOwnProperty(ipl.iplname)) {
                    neededIPLs[ipl.iplname] = ipl;
                }
            }
        });
        // Unload all no longer needed ipl's
        this.currentIPLs.forEach(ipl => {
            if (ipl.isLoaded) {
                 // ships use same iplnames, so ensure that it is not needed by another IPL
                if (!neededIPLs.hasOwnProperty(ipl.iplname)) {
                    this.deactivateIPL(ipl);
                }
            }
        });

        // Load the IPL's we need
        for (let key in neededIPLs) {
            const ipl = neededIPLs[key];
            this.activateIPL(ipl);
        }

        this.isChecking = false;
    }

    activateIPL(ipl: IPL) {
        if (!ipl.isLoaded) { // Skip if it is already loaded
            if (ipl.iplname !== '') {
                native.requestIpl(ipl.iplname);
            }

            if (ipl.hasInteriour) {
                ipl.interiourHandle = native.getInteriorAtCoords(ipl.pos.x, ipl.pos.y, ipl.pos.z);

                if (ipl.children.length > 0) {
                    ipl.children.forEach(name => {
                        native.activateInteriorEntitySet(ipl.interiourHandle, name);
                    });
                }
                native.refreshInterior(ipl.interiourHandle);
            }

            ipl.isLoaded = true;
            alt.logError(`Activate IPL: ${ipl.iplname}-${ipl.desc}`);
        }
    }

    deactivateIPL(ipl: IPL) {
        if (ipl.isLoaded) { // Unload the IPL if it is loaded
            if (ipl.iplname !== '') {
                native.removeIpl(ipl.iplname);
            }
            if (ipl.hasInteriour) {
                native.unpinInterior(ipl.interiourHandle);
                native.disableInterior(ipl.interiourHandle, true);
            }
            ipl.isLoaded = false;
            alt.logError(`Disable IPL: ${ipl.iplname}-${ipl.desc}`);
        }
    }
}

const IPLManager = new cIPLManager();

export { IPLManager };

export default async () => {
    IPLS.forEach((ipl) => {
        IPLManager.addIPL(ipl);
    });
    IPLManager.start();
}
