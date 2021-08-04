import json
import os


file = 'D:\Datesets\大气数据2013年1月日数据\\'
datasets = ['20130101.json', '20130102.json', '20130103.json', '20130104.json', '20130105.json', '20130106.json',
            '20130107.json']

all_data = []

for path in datasets:
    file_path = os.path.join(file, path)
    with open(file_path, encoding='utf-8') as data:
        datas = json.load(data)

        names = []
        for txt in datas:
            names.append(txt['name'][:2])

        new_names = []
        for i in list(set(names)):
            if i != '':
                if u'\u4e00' <= i <= u'\u9fa5':
                    new_names.append(i)
        new_names = list(set(new_names))    # 数据中所有省份

        new_data = []
        for i in new_names:
            PM25 = []
            PM10 = []
            SO2 = []
            NO2 = []
            CO = []
            O3 = []
            U = []
            V = []
            TEMP = []
            RH = []
            PSFC = []
            for txt in datas:
                if txt['name'] != '':
                    if txt['name'].startswith(i):
                        PM25.append(float(txt['PM2.5']))
                        PM10.append(float(txt['PM10']))
                        SO2.append(float(txt['SO2']))
                        NO2.append(float(txt['NO2']))
                        CO.append(float(txt['CO']))
                        O3.append(float(txt['O3']))
                        U.append(float(txt['U']))
                        V.append(float(txt['V']))
                        TEMP.append(float(txt['TEMP']))
                        RH.append(float(txt['RH']))
                        PSFC.append(float(txt['PSFC']))
            an_data = {'PM2.5': round(sum(PM25) / len(PM25), 2), 'PM10': round(sum(PM10) / len(PM10), 2),
                       'SO2': round(sum(SO2) / len(SO2), 2), 'NO2': round(sum(NO2) / len(NO2), 2),
                       'CO': round(sum(CO) / len(CO), 2), 'O3': round(sum(O3) / len(O3), 2),
                       'U': round(sum(U) / len(U), 2), 'V': round(sum(V) / len(V), 2),
                       'TEMP': round(sum(TEMP) / len(TEMP), 2), 'RH': round(sum(RH) / len(RH), 2),
                       'name': i, 'PSFC': round(sum(PSFC) / len(PSFC), 2)}
            new_data.append(an_data)
        print(new_data)
        all_data.append(new_data)

print(all_data)

new_all_data = []
for datas in range(len(all_data)):
    PM25 = []
    PM10 = []
    SO2 = []
    NO2 = []
    CO = []
    O3 = []
    U = []
    V = []
    TEMP = []
    RH = []
    PSFC = []
    for i in all_data:
        PM25.append(i[datas]['PM2.5'])
        PM10.append(i[datas]['PM10'])
        SO2.append(i[datas]['SO2'])
        NO2.append(i[datas]['NO2'])
        CO.append(i[datas]['CO'])
        O3.append(i[datas]['O3'])
        U.append(i[datas]['U'])
        V.append(i[datas]['V'])
        TEMP.append(i[datas]['TEMP'])
        RH.append(i[datas]['RH'])
        PSFC.append(i[datas]['PSFC'])
        new_name = i[datas]['name']
    an_data = {'PM2.5': PM25, 'PM10': PM10,
               'SO2': SO2, 'NO2': NO2,
               'CO': CO, 'O3': O3,
               'U': U, 'V': V,
               'TEMP': TEMP, 'RH': RH,
               'name': new_name, 'PSFC': PSFC}
    new_all_data.append(an_data)


print(new_all_data)

with open('processed_text.json', 'w', encoding='utf-8') as save_file:
    json.dump(new_all_data, save_file, ensure_ascii=False)
    save_file.close()
