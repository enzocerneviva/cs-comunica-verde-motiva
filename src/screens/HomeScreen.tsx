import React, { useState } from 'react';
import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { OcorrenciaCard } from '../components/OcorrenciaCard';
import MOCK_OCORRENCIAS from '../data/mock';
import type { Ocorrencia } from '../types/ocorrencia';

type HomeScreenProps = {
    onNavigateNew?: () => void;
    onNavigateDetails?: (id: string) => void;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 12,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
    },
    listContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
    },
    emptyText: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
    },
    buttonContainer: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    button: {
        backgroundColor: '#2196F3',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export function HomeScreen({
    onNavigateNew,
    onNavigateDetails,
}: HomeScreenProps) {
    const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>(
        MOCK_OCORRENCIAS
    );

    const adicionarOcorrencia = (novaOcorrencia: Ocorrencia) => {
        setOcorrencias([novaOcorrencia, ...ocorrencias]);
    };

    const renderItem = ({ item }: { item: Ocorrencia }) => (
        <OcorrenciaCard
            item={item}
            onPress={() => onNavigateDetails?.(item.id)}
        />
    );

    const ListEmptyComponent = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
                Nenhuma ocorrência registrada ainda.
            </Text>
            <Text style={styles.emptyText}>
                Crie uma nova para começar!
            </Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Ocorrências</Text>
                <Text style={styles.subtitle}>
                    Total: {ocorrencias.length} registros
                </Text>
            </View>

            <FlatList
                data={ocorrencias}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                ListEmptyComponent={ListEmptyComponent}
            />

            <View style={styles.buttonContainer}>
                <Pressable
                    style={styles.button}
                    onPress={() => onNavigateNew?.()}
                >
                    <Text style={styles.buttonText}>+ Nova Ocorrência</Text>
                </Pressable>
            </View>
        </View>
    );
}