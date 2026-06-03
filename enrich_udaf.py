#!/usr/bin/env python3
import json, subprocess, time, re, sys

SERPER_KEY = "2859d7bf94e24c68176bbe9729616dbfe676830c"

# Tous les enregistrements à traiter (sauf UDAF 42 déjà complet)
records = [
    {"id":"rec05zyUj8bN8uDc3","udaf":"UDAF 84","ville":"Avignon","nom":"","prenom":"","linkedin":""},
    {"id":"rec1inDrDtQsgaIeH","udaf":"UDAF 09","ville":"Foix","nom":"","prenom":"","linkedin":""},
    {"id":"rec2X2KnMie8SdRve","udaf":"UDAF 06","ville":"Nice","nom":"Zemp","prenom":"Marianne","linkedin":""},
    {"id":"rec2kQjeMnduh4hqO","udaf":"UDAF 54","ville":"Nancy","nom":"Evrard","prenom":"Alyssia","linkedin":""},
    {"id":"rec4oeGccCnxHU60y","udaf":"UDAF 61","ville":"Alençon","nom":"","prenom":"","linkedin":""},
    {"id":"rec5cPIbHu6jA4HrL","udaf":"UDAF 973","ville":"Cayenne","nom":"","prenom":"","linkedin":""},
    {"id":"rec70w0Ap8NXp66JH","udaf":"UDAF 31","ville":"Toulouse","nom":"","prenom":"","linkedin":""},
    {"id":"rec7hZ1aldSqa24Fp","udaf":"UDAF 39","ville":"Lons-le-Saunier","nom":"","prenom":"","linkedin":""},
    {"id":"rec7rxPzaTekPgb5Z","udaf":"UDAF 73","ville":"Chambéry","nom":"","prenom":"","linkedin":""},
    {"id":"rec8rWMGbXF9zTt5Y","udaf":"UDAF 03","ville":"Moulins","nom":"","prenom":"","linkedin":""},
    {"id":"rec9BTvENzJfSl4Jw","udaf":"UDAF 78","ville":"Versailles","nom":"","prenom":"","linkedin":""},
    {"id":"recAVoPUnKJfvlyzG","udaf":"UDAF 89","ville":"Auxerre","nom":"","prenom":"","linkedin":""},
    {"id":"recAaVX1UhZu26KeP","udaf":"UDAF 45","ville":"Orléans","nom":"","prenom":"","linkedin":""},
    {"id":"recAmy7ESvaGW1gu0","udaf":"UDAF 75","ville":"Paris","nom":"Baudin","prenom":"Camille","linkedin":""},
    {"id":"recBRXAfHGbcw1SOy","udaf":"UDAF 62","ville":"Arras","nom":"","prenom":"","linkedin":""},
    {"id":"recBbBpwDl0INeDAK","udaf":"UDAF 64","ville":"Pau","nom":"","prenom":"","linkedin":""},
    {"id":"recCDHrZpKiPTndsx","udaf":"UDAF 67","ville":"Strasbourg","nom":"","prenom":"","linkedin":""},
    {"id":"recCMIs0fszxJSqdR","udaf":"UDAF 37","ville":"Tours","nom":"","prenom":"","linkedin":""},
    {"id":"recCzmbxFaMo9O3sa","udaf":"UDAF 27","ville":"Évreux","nom":"","prenom":"","linkedin":""},
    {"id":"recD60hhQQr1c5oQE","udaf":"UDAF 47","ville":"Agen","nom":"Le Berre","prenom":"Maëlisse","linkedin":""},
    {"id":"recDYXZMIlBCVfccd","udaf":"UDAF 05","ville":"Gap","nom":"","prenom":"","linkedin":""},
    {"id":"recEkJ4P80FWq47Uk","udaf":"UDAF 24","ville":"Périgueux","nom":"","prenom":"","linkedin":""},
    {"id":"recErhYZREXSTyKGJ","udaf":"UDAF 971","ville":"Basse-Terre","nom":"","prenom":"","linkedin":""},
    {"id":"recFlrnRDLotEDF4l","udaf":"UDAF 49","ville":"Angers","nom":"","prenom":"","linkedin":""},
    {"id":"recG05gdQcnOeKqCE","udaf":"UDAF 2A","ville":"Ajaccio","nom":"","prenom":"","linkedin":""},
    {"id":"recGBtrdEIh1nemOT","udaf":"UDAF 25","ville":"Besançon","nom":"Troutet","prenom":"Lucie","linkedin":""},
    {"id":"recGoZ9iMSQMsTaDd","udaf":"UDAF 79","ville":"Niort","nom":"Hizette","prenom":"Laurence","linkedin":""},
    {"id":"recHYl6b8wrUDJ43f","udaf":"UDAF 63","ville":"Clermont-Ferrand","nom":"","prenom":"","linkedin":""},
    {"id":"recHeL0cLn2TDbWRo","udaf":"UDAF 35","ville":"Rennes","nom":"","prenom":"","linkedin":""},
    {"id":"recIbB9waCVRcYq3C","udaf":"UDAF 976","ville":"Mamoudzou","nom":"","prenom":"","linkedin":""},
    {"id":"recJRT6BvMBPwDsjI","udaf":"UDAF 43","ville":"Le Puy-en-Velay","nom":"","prenom":"","linkedin":""},
    {"id":"recJaHkrTZjNw3BVx","udaf":"UDAF 04","ville":"Digne-les-Bains","nom":"","prenom":"","linkedin":""},
    {"id":"recKG4pajCGc2ryvV","udaf":"UDAF 70","ville":"Vesoul","nom":"","prenom":"","linkedin":""},
    {"id":"recKM5KctzF9iNanB","udaf":"UDAF 07","ville":"Privas","nom":"","prenom":"","linkedin":""},
    {"id":"recKlXcD0US0mreRK","udaf":"UDAF 08","ville":"Charleville-Mézières","nom":"","prenom":"","linkedin":""},
    {"id":"recLKsFks80E1H7wT","udaf":"UDAF 59","ville":"Lille","nom":"","prenom":"","linkedin":""},
    {"id":"recLNXEckR0pyDGm2","udaf":"UDAF 18","ville":"Bourges","nom":"","prenom":"","linkedin":""},
    {"id":"recMMkzXekHEAPPxx","udaf":"UDAF 10","ville":"Troyes","nom":"","prenom":"","linkedin":""},
    {"id":"recN1Pe8m3oIshzAz","udaf":"UDAF 80","ville":"Amiens","nom":"Paty","prenom":"Bérengère","linkedin":""},
    {"id":"recNqByXud923Rzax","udaf":"UDAF 53","ville":"Laval","nom":"","prenom":"","linkedin":""},
    {"id":"recOPF8fMmAIyxY2H","udaf":"UDAF 17","ville":"Lagord","nom":"","prenom":"","linkedin":""},
    {"id":"recP1xtyYiN3RWnLd","udaf":"UDAF 86","ville":"Poitiers","nom":"","prenom":"","linkedin":""},
    {"id":"recPXu1KgvstiIeEn","udaf":"UDAF 81","ville":"Albi","nom":"Mélin","prenom":"Maryse","linkedin":""},
    {"id":"recQ01QAUCPGA8A4a","udaf":"UDAF 66","ville":"Perpignan","nom":"","prenom":"","linkedin":""},
    {"id":"recQ2bk4PoyrM9f8u","udaf":"UDAF 15","ville":"Aurillac","nom":"","prenom":"","linkedin":""},
    {"id":"recQAOllGR6G7B7TP","udaf":"UDAF 28","ville":"Chartres","nom":"","prenom":"","linkedin":""},
    {"id":"recQBr9PMP2WmFLNp","udaf":"UDAF 29","ville":"Quimper","nom":"","prenom":"","linkedin":""},
    {"id":"recQThiO6Jbqm0qsS","udaf":"UDAF 11","ville":"Carcassonne","nom":"","prenom":"","linkedin":""},
    {"id":"recRNOQHWzlmmEzEi","udaf":"UDAF 36","ville":"Châteauroux","nom":"","prenom":"","linkedin":""},
    {"id":"recRNpLFc6RyaiRha","udaf":"UDAF 76","ville":"Mont-Saint-Aignan","nom":"","prenom":"","linkedin":""},
    {"id":"recRgj1YiAo3XkQeT","udaf":"UDAF 33","ville":"Bordeaux","nom":"Senet","prenom":"Agnès","linkedin":""},
    {"id":"recSR3Rgnx0YnOo74","udaf":"UDAF 41","ville":"Blois","nom":"Neau","prenom":"Ludivine","linkedin":""},
    {"id":"recSeOrzUtpRGFn2T","udaf":"UDAF 57","ville":"Metz","nom":"","prenom":"","linkedin":""},
    {"id":"recTe0piz9xGNxQWb","udaf":"UDAF 58","ville":"Nevers","nom":"","prenom":"","linkedin":""},
    {"id":"recUfCxJBsLjCoWxw","udaf":"UDAF 50","ville":"Saint-Lô","nom":"","prenom":"","linkedin":""},
    {"id":"recVLruf3CqQAYZ0s","udaf":"UDAF 83","ville":"La Garde","nom":"","prenom":"","linkedin":""},
    {"id":"recVaklX0e1lIJfyL","udaf":"UDAF 72","ville":"Le Mans","nom":"","prenom":"","linkedin":""},
    {"id":"recW3kmwTDD1XUNMx","udaf":"UDAF 972","ville":"Fort-de-France","nom":"","prenom":"","linkedin":""},
    {"id":"recW9y5mEmiMgqldL","udaf":"UDAF 32","ville":"Auch","nom":"","prenom":"","linkedin":""},
    {"id":"recXZXv4HDMdcVqrZ","udaf":"UDAF 55","ville":"Bar-le-Duc","nom":"","prenom":"","linkedin":""},
    {"id":"recXgibaDgtRL9jqR","udaf":"UDAF 13","ville":"Marseille","nom":"Cruz","prenom":"Noëlla","linkedin":""},
    {"id":"recYgRnyrqwxPanTn","udaf":"UDAF 91","ville":"Évry-Courcouronnes","nom":"","prenom":"","linkedin":""},
    {"id":"recYqtw26OyeHB3Uw","udaf":"UDAF 56","ville":"Vannes","nom":"","prenom":"","linkedin":""},
    {"id":"recZRLPb53F2XsUgV","udaf":"UDAF 23","ville":"Guéret","nom":"","prenom":"","linkedin":""},
    {"id":"reca9C1begBWl8PJw","udaf":"UDAF 38","ville":"Grenoble","nom":"","prenom":"","linkedin":""},
    {"id":"reccrBVDVwkqQu02N","udaf":"UDAF 88","ville":"Épinal","nom":"","prenom":"","linkedin":""},
    {"id":"recdQdNbGUZ0L2XyK","udaf":"UDAF 92","ville":"Saint-Cloud","nom":"","prenom":"","linkedin":""},
    {"id":"recekUPj8xAT55WPq","udaf":"UDAF 68","ville":"Colmar","nom":"","prenom":"","linkedin":""},
    {"id":"recfl5JCDeSWJ0CLG","udaf":"UDAF 19","ville":"Tulle","nom":"","prenom":"","linkedin":""},
    {"id":"recfqblNV2o6NTM2I","udaf":"UDAF 22","ville":"Saint-Brieuc","nom":"","prenom":"","linkedin":""},
    {"id":"recgPQCTTER1GlrwF","udaf":"UDAF 74","ville":"Annecy","nom":"","prenom":"","linkedin":""},
    {"id":"recgtubh3eYS2k47m","udaf":"UDAF 65","ville":"Tarbes","nom":"","prenom":"","linkedin":""},
    {"id":"reciUOX61qb0YO5jL","udaf":"UDAF 69","ville":"Lyon","nom":"","prenom":"","linkedin":""},
    {"id":"reckbjdOdJY85TIIm","udaf":"UDAF 974","ville":"Saint-Denis","nom":"","prenom":"","linkedin":""},
    {"id":"recmYm1TwUUgPKxEQ","udaf":"UDAF 14","ville":"Caen","nom":"","prenom":"","linkedin":""},
    {"id":"recn6GoBG3yj8GuKe","udaf":"UDAF 48","ville":"Mende","nom":"","prenom":"","linkedin":""},
    {"id":"recnCNhzKCQD0sygn","udaf":"UDAF 85","ville":"La Roche-sur-Yon","nom":"Robet","prenom":"Constance","linkedin":""},
    {"id":"recnfxvI7uwnzIx4h","udaf":"UDAF 21","ville":"Dijon","nom":"Pau","prenom":"Axelle","linkedin":""},
    {"id":"reco0oGOoUVyWaom5","udaf":"UDAF 51","ville":"Châlons-en-Champagne","nom":"","prenom":"","linkedin":""},
    {"id":"recoh2JGy0hbBbmqX","udaf":"UDAF 93","ville":"Bobigny","nom":"","prenom":"","linkedin":""},
    {"id":"recp69khR5GDKlHZo","udaf":"UDAF 44","ville":"Nantes","nom":"","prenom":"","linkedin":""},
    {"id":"recpXX7yn2zTbFfAG","udaf":"UDAF 2B","ville":"Bastia","nom":"","prenom":"","linkedin":""},
    {"id":"recphdD365Yu2QOog","udaf":"UDAF 02","ville":"Laon","nom":"","prenom":"","linkedin":""},
    {"id":"recq8DTIC0LtTyy8e","udaf":"UDAF 71","ville":"Mâcon","nom":"","prenom":"","linkedin":""},
    {"id":"recrFMjwVAJVIXk3E","udaf":"UDAF 16","ville":"Angoulême","nom":"","prenom":"","linkedin":""},
    {"id":"recrZowTnTUbHBJzY","udaf":"UDAF 01","ville":"Bourg-en-Bresse","nom":"","prenom":"","linkedin":""},
    {"id":"rectsL6dl28hzNDjW","udaf":"UDAF 46","ville":"Cahors","nom":"","prenom":"","linkedin":""},
    {"id":"recuDyb5qEZ6UzegL","udaf":"UDAF 77","ville":"Melun","nom":"","prenom":"","linkedin":""},
    {"id":"recv9EbdWSKOObRGA","udaf":"UDAF 40","ville":"Mont-de-Marsan","nom":"","prenom":"","linkedin":""},
    {"id":"recvG0K7a3OnodELe","udaf":"UDAF 82","ville":"Montauban","nom":"","prenom":"","linkedin":""},
    {"id":"recvTh6Irhe77uDh1","udaf":"UDAF 94","ville":"Boissy-Saint-Léger","nom":"","prenom":"","linkedin":""},
    {"id":"recvy2xLQZpdTOq2m","udaf":"UDAF 87","ville":"Limoges","nom":"","prenom":"","linkedin":""},
    {"id":"recwW9KcEEN4OZfhy","udaf":"UDAF 60","ville":"Beauvais","nom":"","prenom":"","linkedin":""},
    {"id":"recxHcjvivszNN2OZ","udaf":"UDAF 34","ville":"Montpellier","nom":"","prenom":"","linkedin":""},
    {"id":"recxJdkbop90zTram","udaf":"UDAF 95","ville":"Cergy-Pontoise","nom":"","prenom":"","linkedin":""},
    {"id":"recxmGnVt453w74tB","udaf":"UDAF 30","ville":"Nîmes","nom":"","prenom":"","linkedin":""},
    {"id":"recyg0tmRuK7Y2qIS","udaf":"UDAF 52","ville":"Chaumont","nom":"","prenom":"","linkedin":""},
    {"id":"reczOopRDwy0kxnte","udaf":"UDAF 90","ville":"Belfort","nom":"","prenom":"","linkedin":""},
    {"id":"reczPhP9vl9wcdJLk","udaf":"UDAF 26","ville":"Valence","nom":"","prenom":"","linkedin":""},
    {"id":"reczb3rXu74jWgioS","udaf":"UDAF 12","ville":"Rodez","nom":"","prenom":"","linkedin":""},
]

def serper_search(query):
    payload = json.dumps({"q": query, "hl": "fr", "gl": "fr", "num": 5})
    result = subprocess.run(
        ["curl", "-s", "-X", "POST", "https://google.serper.dev/search",
         "-H", f"X-API-KEY: {SERPER_KEY}",
         "-H", "Content-Type: application/json",
         "-d", payload],
        capture_output=True, text=True, timeout=15
    )
    try:
        return json.loads(result.stdout)
    except:
        return {}

def extract_linkedin(data):
    for r in data.get("organic", []):
        url = r.get("link", "")
        if "linkedin.com/in/" in url:
            return url
    return ""

def extract_name_from_results(data, ville):
    title_re = re.compile(r'(directeur|directrice|responsable).{0,30}communication', re.I)
    name_re = re.compile(r'\b([A-ZÉÈÊËÀÂÎÏÔÙÛÜ][a-zéèêëàâîïôùûü\-]+)\s+([A-ZÉÈÊËÀÂÎÏÔÙÛÜ][A-ZÉÈÊËÀÂÎÏÔÙÛÜa-zéèêëàâîïôùûü\-]+)\b')

    for r in data.get("organic", []):
        text = (r.get("title","") + " " + r.get("snippet",""))
        if title_re.search(text) and ("udaf" in text.lower() or ville.lower() in text.lower()):
            m = name_re.search(text)
            if m:
                p1, p2 = m.group(1), m.group(2)
                # Heuristique: si p2 tout majuscules = NOM, sinon prénom/nom
                if p2 == p2.upper() and len(p2) > 2:
                    return p2, p1
                elif p1 == p1.upper() and len(p1) > 2:
                    return p1, p2
                else:
                    return p2.upper(), p1
    return "", ""

results = []
total = len(records)

for i, rec in enumerate(records):
    udaf = rec["udaf"]
    ville = rec["ville"]
    nom = rec["nom"]
    prenom = rec["prenom"]
    linkedin = rec["linkedin"]

    print(f"[{i+1}/{total}] {udaf} - {ville}", file=sys.stderr)

    new_nom, new_prenom, new_linkedin, new_job = nom, prenom, linkedin, ""

    if nom and prenom:
        # Déjà un nom → chercher LinkedIn directement
        query = f'"{prenom} {nom}" UDAF {ville} site:linkedin.com/in'
        data = serper_search(query)
        new_linkedin = extract_linkedin(data)
        if not new_linkedin:
            # Essai sans site: restriction
            query2 = f'"{prenom} {nom}" UDAF {ville} linkedin'
            data2 = serper_search(query2)
            new_linkedin = extract_linkedin(data2)
    else:
        # Pas de nom → chercher directeur/directrice com + LinkedIn
        query = f'directeur directrice "responsable communication" UDAF {ville} linkedin.com/in'
        data = serper_search(query)
        new_linkedin = extract_linkedin(data)
        extracted_nom, extracted_prenom = extract_name_from_results(data, ville)
        if extracted_nom:
            new_nom = extracted_nom
            new_prenom = extracted_prenom

        # Si pas de résultat, essai sans LinkedIn
        if not new_nom:
            query2 = f'"directeur" OR "directrice" OR "responsable" communication UDAF {ville}'
            data2 = serper_search(query2)
            extracted_nom2, extracted_prenom2 = extract_name_from_results(data2, ville)
            if extracted_nom2:
                new_nom = extracted_nom2
                new_prenom = extracted_prenom2

    results.append({
        "id": rec["id"],
        "udaf": udaf,
        "ville": ville,
        "nom": new_nom,
        "prenom": new_prenom,
        "linkedin": new_linkedin,
    })

    time.sleep(0.8)  # respecter rate limit Serper

print(json.dumps(results, ensure_ascii=False, indent=2))
