import requests
from bs4 import BeautifulSoup
import csv

def get_info_subjects(subject_code):
    urlInfo = f"https://uspdigital.usp.br/jupiterweb/obterDisciplina?nomdis=&sgldis={subject_code}"
    urlType = f"https://uspdigital.usp.br/jupiterweb/obterTurma?sgldis={subject_code}"

    response = requests.get(urlInfo)


    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'lxml')

        subject_name = soup.select('#layout_conteudo b')[2].text.strip()[22:]
        subject_description = soup.select('#layout_conteudo pre:nth-child(1)')[2].text.strip()
        subject_class_credits = soup.select('div#layout_principal div#layout_conteudo span.txt_arial_8pt_gray')[0].text.strip()
        subject_project_credits = soup.select('div#layout_principal div#layout_conteudo span.txt_arial_8pt_gray')[1].text.strip()

        print([subject_code, subject_name, subject_description, subject_class_credits,subject_project_credits])

get_info_subjects('mac0338')