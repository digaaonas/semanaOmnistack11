import React, { useEffect, useState } from 'react'
import { View,FlatList , Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import api from '../../services/api'

import styles from './styles'

import logoImg from '../../assets/logo.png'

export default function Incidents(){
    const navigation = useNavigation()
    const [incidents, setIncidents] = useState([])
    const [incidentsTotal, setIncidentsTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    function navigateToDetail(incident){
        navigation.navigate('Details', { incident })
    }

    async function loadIncident(){
        if(loading){
            return
        }

        if(incidentsTotal > 0 && incidents.length === incidentsTotal){
            return
        }

        setLoading(true)

        const response = await api.get('incidents', {
            params: { page}
        })        

        setIncidents([...incidents, ...response.data])
        setIncidentsTotal(response.headers['x-total-count'])
        setPage(page + 1)
        setLoading(false)
    }

    useEffect(() => {
        loadIncident()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{incidentsTotal} casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                style={styles.incidentsList}
                data={incidents}
                keyExtractor={incidents => String(incidents.id)}
                onEndReached={loadIncident}
                onEndReachedThreshold={0.2}
                showsVerticalScrollIndicator={false}
                renderItem={ ({ item: incidents }) => (
                    <View style={styles.incidents}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incidents.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incidents.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incidents.value)}
                        </Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={ () => {}}
                            onPress={() => navigateToDetail(incidents)}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name='arrow-right' size={16} color='#E02041'/>
                        </TouchableOpacity>
                    </View>
                )}            
            />           
        </View>
    )
}